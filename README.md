# GM Solution LLC — Marketing Website

The brochure website for **GM Solution LLC** ([gmsolllc.com](https://gmsolllc.com)), an IT staff augmentation company.

The site explains what staff augmentation is and what GM Solution offers. Its one goal is to get visitors to submit the contact form.

- **Single-page site** with five sections: Home (`#home`) · Services (`#services`) · How It Works (`#how-it-works`) · About (`#about`) · Contact (`#contact`)
- **Navigation:** the menu, buttons and footer links scroll smoothly to each section by its ID. The menu highlights whichever section is on screen, and the URL updates (for example `gmsolllc.com/#services`) so every section can be linked to directly.
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Nodemailer (SMTP email)
- **SEO:** meta tags, Open Graph and Twitter cards, a generated OG image, `sitemap.xml`, `robots.txt`, and Organization JSON-LD
- **Hosting:** ready for Vercel. The page is prerendered as static HTML, and the contact form runs as a server action.

### How section scrolling works

- Navigation targets come from `navigation` in `src/content/site.ts`. Each entry's `id` must match a wrapper `id` in `src/app/page.tsx`.
- `src/components/ui/ScrollLink.tsx` does the smooth scrolling:
  - It runs an eased animation that lasts 0.45 to 0.9 seconds, depending on distance.
  - It stops instantly if the visitor scrolls, swipes or presses a key, so it never fights them.
  - Visitors who have "reduce motion" turned on get an instant jump instead.
  - From another URL, such as the 404 page, the same links navigate to the home page and land on the section.
- The header shows which section is active by watching sections as they cross the middle of the screen, using `IntersectionObserver`.
- The sticky header is 4rem tall, and `scroll-padding-top: 5rem` in `globals.css` keeps section headings clear of it.
- Old page URLs (`/services`, `/how-it-works`, `/about`, `/contact`) permanently redirect to their sections. The redirects are set in `next.config.ts`.

---

## 1. Run locally

**Requirements:** Node.js 20.9 or newer, and npm.

```bash
npm install
cp .env.example .env.local   # Windows PowerShell: Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000.

> **Contact form in development:** if `SMTP_HOST` is empty, the form still works. Both emails are printed in the terminal instead of being sent. In production, missing SMTP settings show the visitor an error that tells them to email you directly.

### Useful scripts

| Command             | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload      |
| `npm run build`     | Create a production build                 |
| `npm run start`     | Serve the production build                |
| `npm run lint`      | Run ESLint                                |
| `npm run typecheck` | Run the TypeScript compiler (no output)   |

---

## 2. Edit content

**Almost all copy lives in `src/content/`.** Edit those files and you don't need to touch any components.

| File                     | What it controls                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `src/content/site.ts`     | Company name, domain, contact email and phone, LinkedIn URL, copyright line, SEO description and keywords, menu items and section IDs |
| `src/content/home.ts`     | Hero, client logos and stats, the "What is staff augmentation" explainer and comparison table, the "Are you facing?" challenges, engagement models and options, the 8 benefits, CTA band |
| `src/content/services.ts` | The 8 staff augmentation service models (with illustrations), the 8 role cards, the tech logos and the 9 technology categories |
| `src/content/process.ts`  | The hiring process: 4 phases containing 8 steps (How It Works section)                                |
| `src/content/about.ts`    | Company story, key figures, mission, values, team expertise, global presence (About section)          |

The content is adapted from GM Solution's reference staff augmentation page. That includes the stats (50+ engineers, 100+ projects, 10+ years, 95% retention), the timelines (resumes in 24 hours, onboarding in 48–72 hours), the client logos, and the Coimbatore delivery center.

Section headings and intro lines are in the matching component in `src/components/sections/`. To reorder or regroup the page's sections, edit `src/app/page.tsx`.

### Find every placeholder

Content the client hasn't supplied yet is marked **`[PLACEHOLDER]`**. Search the project for it:

```bash
# macOS / Linux / Git Bash
grep -rn "\[PLACEHOLDER\]" src public
```

```powershell
# Windows PowerShell
Get-ChildItem -Recurse -File src | Select-String -Pattern "\[PLACEHOLDER\]"
```

Current placeholders:

- **LinkedIn URL:** in `site.ts`

### Common edits

- **Client logos:** put the logo files in `public/clients/`, then add each one to the `trustBar.logos` array in `home.ts` with its file path, real company name (used as alt text), and pixel size. Logos are shown in grayscale on light tiles and turn to full color on hover.
- **Stats:** `trustBar.stats` in `home.ts` and `story.facts` in `about.ts`. Keep the two in sync.
- **Service illustrations:** stored in `public/services/` and referenced from `serviceModels` in `services.ts`.
- **Tech-stack logos:** SVGs live in `public/tech/` and are listed in `techStack` in `services.ts`. The current files come from [Devicon](https://devicon.dev) (MIT).
- **Icons:** role, step, and benefit icons come from [Lucide](https://lucide.dev/icons). Import a different icon in the content file and swap it in.
- **Colors and fonts:** brand colors are set in the `@theme` block of `src/app/globals.css`. Fonts (Public Sans for headings, Inter for body text) are loaded in `src/app/layout.tsx`.
- **Copyright year:** `copyright` in `site.ts`.

---

## 3. Contact form and spam protection

The form posts to a **Next.js server action** (`src/actions/contact.ts`). It validates the input with Zod, then sends **two emails over SMTP** using [Nodemailer](https://nodemailer.com):

| Email | Sent to | Reply-To | What it contains |
| ----- | ------- | -------- | ---------------- |
| **New inquiry** | `MAIL_TO` (your inbox) | The visitor | Name, email, company, submission time, the message, and a "Reply to …" button |
| **Confirmation** | The visitor's email | `MAIL_TO` | Thank-you note, the next steps (resumes in 24 hours, onboarding in 48–72 hours), and your contact details |

- **If the inquiry email fails,** the visitor sees an error asking them to try again or email you directly.
- **The confirmation is sent after the response,** using Next's `after()`, so the form stays fast. If only the confirmation fails, the inquiry has still reached you, and the error is logged.
- **The confirmation doesn't repeat the visitor's message.** Because it goes to whatever address was typed, a spammer could otherwise use the form to send their own text to strangers from your domain.

Email templates live in `src/lib/email/templates.ts`, and SMTP settings in `src/lib/email/mailer.ts`.

### What do From and To mean?

- **`SMTP_USER` / `SMTP_PASS`:** the login of the mailbox that sends the emails, usually `accounts@gmsolllc.com`. This is the same login you'd use to set up that mailbox in Outlook or a phone mail app.
- **`MAIL_FROM`:** the sender name and address people see, for example `GM Solution LLC <accounts@gmsolllc.com>`. It **must be the same address as `SMTP_USER`** (or an alias that mailbox may send as). Otherwise providers reject the email or put it in spam.
- **`MAIL_TO`:** where new inquiries are delivered, which is your inbox. It can be the same address as `MAIL_FROM`. To notify several people, separate addresses with commas: `accounts@gmsolllc.com,sales@gmsolllc.com`.

### SMTP settings by email provider

Use whichever provider hosts the `@gmsolllc.com` mailbox:

| Provider | `SMTP_HOST` | `SMTP_PORT` | Password to use |
| -------- | ----------- | ----------- | --------------- |
| Google Workspace (Gmail) | `smtp.gmail.com` | `465` | An **App Password** (Google Account → Security → 2-Step Verification → App passwords). Your normal password won't work. |
| Microsoft 365 / Outlook | `smtp.office365.com` | `587` | The mailbox password. The admin must enable "Authenticated SMTP" for this mailbox. |
| Zoho Mail | `smtp.zoho.com` | `465` | The mailbox password, or an app-specific password if 2FA is on |
| Hostinger | `smtp.hostinger.com` | `465` | The mailbox password from hPanel → Emails |
| cPanel hosting | `mail.gmsolllc.com` | `465` | The mailbox password from cPanel → Email Accounts → Connect Devices |

Port `465` uses SSL and port `587` uses STARTTLS. `SMTP_SECURE` is worked out from the port automatically; you only need to set it for an unusual setup.

**Deliverability:** make sure the domain's DNS has the **SPF** and **DKIM** records your email provider gives you. Without them, the confirmation emails to visitors are likely to land in spam.

### Testing locally

Without `SMTP_HOST`, `npm run dev` prints both emails to the terminal instead of sending them. To send real emails locally, put the SMTP settings in `.env.local`, restart `npm run dev`, and submit the form using your own email address. You should receive both emails.

### Spam protection

There are five layers. No CAPTCHA is needed.

1. **Honeypot field:** a hidden `website` input that people never see. Bots that fill it in get a fake "success" message and nothing is sent.
2. **Time trap:** forms submitted less than 3 seconds after the page loads are treated as bots.
3. **Link limit:** messages containing more than 3 URLs are dropped.
4. **Clean name and company:** these fields reject links, angle brackets and line breaks.
5. **Rate limit:** at most 5 submissions per IP address every 10 minutes. This limit is kept in memory per server instance. For a hard guarantee, put [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) or Vercel KV / Upstash in front of it.

### Environment variables

| Variable               | Required          | Example                                 |
| ---------------------- | ----------------- | --------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes (production)  | `https://gmsolllc.com`                  |
| `SMTP_HOST`            | Yes (production)  | `smtp.gmail.com`                        |
| `SMTP_PORT`            | No (default 465)  | `465`                                   |
| `SMTP_SECURE`          | No (from port)    | `true`                                  |
| `SMTP_USER`            | Yes               | `accounts@gmsolllc.com`                     |
| `SMTP_PASS`            | Yes               | *(mailbox or app password)*             |
| `MAIL_FROM`            | No (uses `SMTP_USER`) | `GM Solution LLC <accounts@gmsolllc.com>` |
| `MAIL_TO`              | No (uses `accounts@gmsolllc.com`) | `accounts@gmsolllc.com`         |

---

## 4. Deploy to Vercel

1. Push this project to a Git repository (GitHub, GitLab or Bitbucket).
2. In [Vercel](https://vercel.com/new), click **Add New → Project** and import the repository. Vercel detects Next.js automatically, so leave the build settings at their defaults.
3. Under **Settings → Environment Variables**, add the variables above (at minimum `NEXT_PUBLIC_SITE_URL`, `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` and `MAIL_TO`) for the *Production* environment. Add them to *Preview* too if you want the form to work there.
4. Click **Deploy**.
5. Under **Settings → Domains**, add `gmsolllc.com` and `www.gmsolllc.com`, then update your DNS with the records Vercel shows you.
6. After the first deploy, submit the contact form using your own email address. Confirm that both the inquiry and the confirmation email arrive, and check your spam folder.

**Optional:** submit `https://gmsolllc.com/sitemap.xml` in Google Search Console.

You can also deploy from the command line: `npm i -g vercel && vercel --prod`.

---

## Project structure

```
.
├── public/
│   ├── clients/            # Client logos (Deloitte, Kanini)
│   ├── services/           # Service model illustrations
│   ├── images/             # Photo for the "Are you facing?" section
│   ├── tech/               # Tech-stack logos
│   └── logo.svg            # Logo used in Organization JSON-LD
├── src/
│   ├── actions/
│   │   └── contact.ts      # Contact form server action (validation, spam checks, sends both emails)
│   ├── app/
│   │   ├── layout.tsx      # Root layout: fonts, global metadata, header/footer, JSON-LD
│   │   ├── page.tsx        # The single page: section order and section IDs
│   │   ├── not-found.tsx   # 404 page
│   │   ├── sitemap.ts      # /sitemap.xml
│   │   ├── robots.ts       # /robots.txt
│   │   ├── opengraph-image.tsx  # Generated 1200×630 social share image
│   │   ├── icon.svg        # Favicon
│   │   └── globals.css     # Tailwind theme (colors, fonts, utilities)
│   ├── components/
│   │   ├── layout/         # Header (sticky, scroll-spy, mobile menu) and Footer
│   │   ├── sections/       # Hero, TrustBar, Explainer, Services, TechStackGrid, EngagementModels,
│   │   │                   # ProcessSteps, Benefits, About, CtaBand
│   │   ├── contact/        # ContactForm (client) and ContactSection
│   │   └── ui/             # ScrollLink (smooth section scrolling), Button, Container, SectionHeading, Logo
│   ├── content/            # ← All editable copy lives here
│   └── lib/                # SEO helpers, contact form types, rate limiter
│       └── email/          # SMTP transport (mailer.ts) and email templates (templates.ts)
├── .env.example
├── next.config.ts          # Security headers, redirects from the old page URLs
└── package.json
```
