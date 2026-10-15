import { site } from "@/content/site";

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Email = { subject: string; html: string; text: string };

const color = {
  page: "#f4f7fc",
  card: "#ffffff",
  ink: "#0b1b3f",
  text: "#1e2b4a",
  muted: "#48587a",
  line: "#e2e8f2",
  brand: "#012060",
  accent: "#2459d6",
};

const font = "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const multiline = (value: string) => escapeHtml(value).replace(/\r?\n/g, "<br>");

export function safeFirstName(name: string) {
  const first = name.trim().split(/\s+/)[0] ?? "";
  return /^[\p{L}][\p{L}'’.-]{0,29}$/u.test(first) ? first : "there";
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date) + " UTC";
}

function button(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="border-radius:999px;background:${color.brand};">
      <a href="${href}" style="display:inline-block;padding:12px 26px;font-family:${font};font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:999px;">${label}</a>
    </td></tr></table>`;
}

function layout({ preheader, title, body }: { preheader: string; title: string; body: string }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${color.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${color.page};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
      <tr><td style="background:${color.brand};border-radius:16px 16px 0 0;padding:22px 32px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td style="background:#ffffff;border-radius:8px;width:36px;height:36px;text-align:center;font-family:${font};font-size:14px;font-weight:800;color:${color.brand};">GM</td>
          <td style="padding-left:12px;font-family:${font};font-size:18px;font-weight:700;color:#ffffff;">${site.name}</td>
        </tr></table>
      </td></tr>
      <tr><td style="height:4px;line-height:4px;font-size:0;background-color:${color.accent};background-image:linear-gradient(90deg,#012060,#2459d6,#8fb0f2);">&nbsp;</td></tr>
      <tr><td style="background:${color.card};border-radius:0 0 16px 16px;padding:36px 32px;font-family:${font};font-size:15px;line-height:1.6;color:${color.text};">
        ${body}
      </td></tr>
      <tr><td style="padding:20px 32px;text-align:center;font-family:${font};font-size:12px;line-height:1.6;color:${color.muted};">
        ${site.name} · <a href="${site.url}" style="color:${color.muted};">${site.domain}</a> · <a href="mailto:${site.email}" style="color:${color.muted};">${site.email}</a>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export function ownerNotification(inquiry: Inquiry, submittedAt = new Date()): Email {
  const subject = `New inquiry from ${inquiry.name} (${inquiry.company})`;
  const firstName = safeFirstName(inquiry.name);
  const replyHref = `mailto:${escapeHtml(inquiry.email)}?subject=${encodeURIComponent(`Re: Your inquiry to ${site.name}`)}`;
  const rows = [
    ["Name", escapeHtml(inquiry.name)],
    ["Email", `<a href="mailto:${escapeHtml(inquiry.email)}" style="color:${color.accent};">${escapeHtml(inquiry.email)}</a>`],
    ["Company", escapeHtml(inquiry.company)],
    ["Submitted", formatDate(submittedAt)],
  ];

  const html = layout({
    preheader: `${inquiry.name} from ${inquiry.company} sent a message through ${site.domain}.`,
    title: subject,
    body: `
      <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color.accent};">Website contact form</p>
      <h1 style="margin:0 0 24px;font-size:22px;line-height:1.3;color:${color.ink};">New inquiry from ${escapeHtml(inquiry.name)}</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) => `<tr>
          <td style="padding:10px 0;border-bottom:1px solid ${color.line};width:110px;font-size:13px;font-weight:600;color:${color.muted};vertical-align:top;">${label}</td>
          <td style="padding:10px 0;border-bottom:1px solid ${color.line};font-size:15px;color:${color.text};">${value}</td>
        </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:28px 0 8px;font-size:13px;font-weight:600;color:${color.muted};">Message</p>
      <div style="padding:16px 18px;background:${color.page};border-left:4px solid ${color.accent};border-radius:8px;font-size:15px;color:${color.text};">${multiline(inquiry.message)}</div>
      <div style="margin-top:28px;">${button(replyHref, firstName === "there" ? "Reply" : `Reply to ${escapeHtml(firstName)}`)}</div>
      <p style="margin:20px 0 0;font-size:13px;color:${color.muted};">Tip: replying to this email goes straight to ${escapeHtml(inquiry.email)}.</p>`,
  });

  const text = [
    `New inquiry from the ${site.domain} contact form`,
    "",
    `Name:      ${inquiry.name}`,
    `Email:     ${inquiry.email}`,
    `Company:   ${inquiry.company}`,
    `Submitted: ${formatDate(submittedAt)}`,
    "",
    "Message:",
    inquiry.message,
    "",
    `Reply to this email to respond to ${inquiry.name}.`,
  ].join("\n");

  return { subject, html, text };
}

const nextSteps = [
  ["We review your requirements", "Our team looks at your project, tech stack, and the skills you need."],
  ["You receive matched resumes", "Profiles of pre-vetted engineers within 24 hours."],
  ["Interview and onboard", "Pick your engineers and get them started in 48–72 hours."],
];

export function userConfirmation(inquiry: Pick<Inquiry, "name">): Email {
  const firstName = safeFirstName(inquiry.name);
  const subject = `We've received your message — ${site.name}`;

  const html = layout({
    preheader: "Thanks for contacting us. Here's what happens next.",
    title: subject,
    body: `
      <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:${color.ink};">Thanks, ${escapeHtml(firstName)} — we've got your message</h1>
      <p style="margin:0 0 24px;">Thank you for contacting ${site.name}. Our team is reviewing your requirements and will get back to you shortly.</p>
      <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color.accent};">What happens next</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${nextSteps
          .map(
            ([title, detail], i) => `<tr>
          <td style="width:40px;padding:8px 0;vertical-align:top;">
            <div style="width:28px;height:28px;line-height:28px;border-radius:50%;background:${color.brand};color:#ffffff;text-align:center;font-size:13px;font-weight:700;">${i + 1}</div>
          </td>
          <td style="padding:8px 0;vertical-align:top;">
            <strong style="color:${color.ink};">${title}</strong><br>
            <span style="font-size:14px;color:${color.muted};">${detail}</span>
          </td>
        </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:24px 0;">Need to add anything? Just reply to this email, or reach us at <a href="mailto:${site.email}" style="color:${color.accent};">${site.email}</a> or <a href="${site.phone.href}" style="color:${color.accent};">${site.phone.display}</a>.</p>
      ${button(site.url, `Visit ${site.domain}`)}
      <p style="margin:28px 0 0;padding-top:20px;border-top:1px solid ${color.line};font-size:12px;color:${color.muted};">You're receiving this email because this address was used on the contact form at ${site.domain}. If that wasn't you, you can safely ignore it.</p>`,
  });

  const text = [
    `Hi ${firstName},`,
    "",
    `Thank you for contacting ${site.name}. Our team is reviewing your requirements and will get back to you shortly.`,
    "",
    "What happens next:",
    ...nextSteps.map(([title, detail], i) => `${i + 1}. ${title} — ${detail}`),
    "",
    `Need to add anything? Just reply to this email, or reach us at ${site.email} or ${site.phone.display}.`,
    "",
    `— ${site.name}`,
    site.url,
    "",
    `You're receiving this email because this address was used on the contact form at ${site.domain}. If that wasn't you, you can safely ignore it.`,
  ].join("\n");

  return { subject, html, text };
}
