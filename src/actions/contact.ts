"use server";

import { headers } from "next/headers";
import { after } from "next/server";
import { z } from "zod";
import { site } from "@/content/site";
import { rateLimit } from "@/lib/rate-limit";
import { getMailConfig, getTransporter } from "@/lib/email/mailer";
import { ownerNotification, userConfirmation } from "@/lib/email/templates";
import {
  contactFields,
  HONEYPOT_FIELD,
  MIN_FILL_TIME_MS,
  STARTED_AT_FIELD,
  type ContactField,
  type ContactFormState,
  type ContactValues,
} from "@/lib/contact";

const plainText = (value: string) => !/https?:|www\.|[<>\r\n]/i.test(value);

const schema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long.")
    .refine(plainText, "Please enter your name without links or special characters."),
  email: z.string().max(200, "Email is too long.").pipe(z.email("Please enter a valid email address.")),
  company: z
    .string()
    .min(2, "Please enter your company name.")
    .max(150, "Company name is too long.")
    .refine(plainText, "Please enter your company name without links or special characters."),
  message: z
    .string()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(5000, "Message is too long (max 5,000 characters)."),
});

const MAX_LINKS = 3;

export async function submitContact(prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const submissionId = prev.submissionId + 1;
  const values = Object.fromEntries(
    contactFields.map((f) => [f, String(formData.get(f) ?? "").trim()]),
  ) as ContactValues;

  const silentSuccess: ContactFormState = { status: "success", submissionId, message: successMessage() };

  if (String(formData.get(HONEYPOT_FIELD) ?? "") !== "") return silentSuccess;

  const startedAt = Number(formData.get(STARTED_AT_FIELD));
  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return {
      status: "error",
      submissionId,
      values,
      message: `Please enable JavaScript and try again, or email us at ${site.email}.`,
    };
  }
  if (Date.now() - startedAt < MIN_FILL_TIME_MS) return silentSuccess;

  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField;
      fieldErrors[field] ??= issue.message;
    }
    return { status: "error", submissionId, values, fieldErrors, message: "Please fix the highlighted fields." };
  }

  const inquiry = parsed.data;
  if ((inquiry.message.match(/https?:\/\//gi) ?? []).length > MAX_LINKS) return silentSuccess;

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`).allowed) {
    return {
      status: "error",
      submissionId,
      values,
      message: "You've sent several messages in a short time. Please try again in a few minutes.",
    };
  }

  const owner = ownerNotification(inquiry);
  const confirmation = userConfirmation(inquiry);
  const config = getMailConfig();

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      console.info(
        `[contact] SMTP is not configured — logging emails instead of sending.\n\n--- To owner ---\nSubject: ${owner.subject}\n${owner.text}\n\n--- To ${inquiry.email} ---\nSubject: ${confirmation.subject}\n${confirmation.text}`,
      );
      return { status: "success", submissionId, message: successMessage(inquiry.name) };
    }
    console.error("[contact] SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.");
    return { status: "error", submissionId, values, message: failureMessage() };
  }

  const transport = getTransporter(config);

  try {
    const sent = await transport.sendMail({
      from: config.from,
      to: config.to,
      replyTo: { name: inquiry.name, address: inquiry.email },
      subject: owner.subject,
      html: owner.html,
      text: owner.text,
    });
    console.info(`[contact] Inquiry email sent to ${config.to} (${sent.response})`);
  } catch (err) {
    console.error("[contact] Failed to send owner notification:", err);
    return { status: "error", submissionId, values, message: failureMessage() };
  }

  after(async () => {
    try {
      const sent = await transport.sendMail({
        from: config.from,
        to: inquiry.email,
        replyTo: config.to,
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
      });
      console.info(`[contact] Confirmation email sent to ${inquiry.email} (${sent.response})`);
    } catch (err) {
      console.error(`[contact] Failed to send confirmation to ${inquiry.email}:`, err);
    }
  });

  return { status: "success", submissionId, message: successMessage(inquiry.name) };
}

function successMessage(name?: string) {
  const greeting = name ? `Thanks, ${name.split(" ")[0]}!` : "Thanks!";
  return `${greeting} Your message has been sent, and a confirmation is on its way to your inbox. We'll get back to you shortly.`;
}

function failureMessage() {
  return `Sorry, we couldn't send your message right now. Please try again or email us directly at ${site.email}.`;
}
