"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { submitContact } from "@/actions/contact";
import {
  HONEYPOT_FIELD,
  initialContactState,
  STARTED_AT_FIELD,
  type ContactField,
} from "@/lib/contact";
import { Button } from "@/components/ui/Button";

const fields: {
  name: ContactField;
  label: string;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
  placeholder: string;
}[] = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name", placeholder: "Jane Smith" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email", placeholder: "jane@company.com" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", placeholder: "Company Inc." },
  {
    name: "message",
    label: "How can we help?",
    type: "textarea",
    placeholder: "Tell us about your project, the roles you need, and your timeline.",
  },
];

const inputClasses =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const [dismissedId, setDismissedId] = useState(0);
  const startedAt = useRef(0);
  const startedInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!startedAt.current) startedAt.current = Date.now();
    if (startedInput.current) startedInput.current.value = String(startedAt.current);
  }, [state.submissionId, dismissedId]);

  if (state.status === "success" && state.submissionId !== dismissedId) {
    return (
      <div role="status" className="flex flex-col items-center py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft">
          <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-fg">Message sent</h3>
        <p className="mt-3 max-w-sm text-muted">{state.message}</p>
        <Button variant="ghost" className="mt-8" onClick={() => setDismissedId(state.submissionId)}>
          Send another message
        </Button>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};

  return (
    <form key={state.submissionId} action={formAction} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `contact-${field.name}`;
          const error = errors[field.name];
          const shared = {
            id,
            name: field.name,
            required: true,
            placeholder: field.placeholder,
            defaultValue: state.values?.[field.name],
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
            className: `${inputClasses} ${error ? "border-red-500" : "border-line-strong"}`,
          };

          return (
            <div key={field.name} className={field.name === "name" || field.name === "email" ? "" : "sm:col-span-2"}>
              <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea rows={5} maxLength={5000} {...shared} />
              ) : (
                <input type={field.type} autoComplete={field.autoComplete} maxLength={200} {...shared} />
              )}
              {error && (
                <p id={`${id}-error`} className="mt-2 text-xs font-medium text-red-600">
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedInput} type="hidden" name={STARTED_AT_FIELD} />

      {state.status === "error" && state.message && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-subtle">We only use your details to respond to your inquiry.</p>
        <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
          {pending ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send message <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
