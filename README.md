# Magle Digital — Website

The company website for Magle Digital: custom websites, branding and growth
marketing, plus the in-house products in development (booking system, AI
engineered assistance, email automation, review capture & management).

Built with Next.js (App Router), TypeScript and Tailwind CSS. No CMS, no
database — page content lives in [`src/lib/content.ts`](src/lib/content.ts).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/services` + `/services/[slug]` | Services overview + detail pages (Custom Websites, Branding, Growth Marketing), each with a customer-facing process |
| `/products` + `/products/[slug]` | Products overview + detail pages (Booking System, AI Engineered Assistance, Email Automation, Review Capture & Management), each marked "coming soon" |
| `/culture` | Culture, values and careers, with an application form |
| `/contact` | Contact form |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Forms

The contact form (`/api/contact`) and application form (`/api/careers`) send
email via [Resend](https://resend.com) when configured, and log submissions to
the server console otherwise — nothing is lost while unconfigured.

Copy `.env.example` to `.env.local` and fill in the values to enable delivery.
Secrets live in environment variables only; never commit them.

## Deploy (free path)

Deploys as a standard Next.js app on the Vercel or Cloudflare Pages free tier.
Add the environment variables from `.env.example` in the host's dashboard.

## Editing content

All service and product copy is data-driven from `src/lib/content.ts` —
add or edit an entry there and the overview cards, detail pages, footer links
and static params update automatically.
