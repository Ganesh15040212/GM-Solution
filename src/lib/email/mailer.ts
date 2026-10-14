import nodemailer, { type Transporter } from "nodemailer";
import { site } from "@/content/site";

export type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
  from: string;
  to: string;
};

export function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  if (!host) return null;

  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER?.trim() || undefined;
  const pass = process.env.SMTP_PASS || undefined;
  const fromAddress = user && user.includes("@") ? user : site.email;

  return {
    host,
    port,
    secure,
    user,
    pass,
    from: process.env.MAIL_FROM?.trim() || `${site.name} <${fromAddress}>`,
    to: process.env.MAIL_TO?.trim() || site.email,
  };
}

let transporter: Transporter | null = null;

export function getTransporter(config: MailConfig) {
  transporter ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.user && config.pass ? { user: config.user, pass: config.pass } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
  return transporter;
}
