export const contactFields = ["name", "email", "company", "message"] as const;

export type ContactField = (typeof contactFields)[number];

export type ContactValues = Record<ContactField, string>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: ContactValues;
  submissionId: number;
};

export const initialContactState: ContactFormState = { status: "idle", submissionId: 0 };

export const HONEYPOT_FIELD = "website";
export const STARTED_AT_FIELD = "startedAt";
export const MIN_FILL_TIME_MS = 3000;
