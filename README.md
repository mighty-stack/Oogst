# Oogst site

React + Vite + Tailwind, matching the approved mockups. Contact form is wired
to a Resend-powered serverless function.

## Setup

```
npm install
cp .env.example .env.local
```

Fill in `.env.local`:
- `RESEND_API_KEY` — from resend.com/api-keys
- `NOTIFY_EMAIL` — the email on your Resend account. Until you verify a
  domain, Resend only allows sending TO this address, so this is where
  audit-request notifications land.

## Running the frontend only

```
npm run dev
```

This runs the pages fine, but the Contact form's fetch to `/api/send-audit`
will fail with a 404 — plain `vite dev` does not run the `/api` serverless
function. That's expected.

## Running with the API route working

Install the Vercel CLI once:

```
npm install -g vercel
```

Then, instead of `npm run dev`, run:

```
vercel dev
```

This serves both the React app and the `/api/send-audit` function together,
using your `.env.local` values. Answer the CLI's setup prompts (it will ask
to link the project; you can skip actually deploying).

## Deploying

Push to GitHub and import the repo at vercel.com — it will detect the Vite
build and the `/api` folder automatically. Add `RESEND_API_KEY` and
`NOTIFY_EMAIL` as environment variables in the Vercel project settings
(these do not come from `.env.local` in production).

## Known limitation

Until a domain is verified in Resend, the audit form can notify you but
cannot send a confirmation email back to the person who submitted it. Once
you have a domain, verify it in Resend and update the `from` address in
`api/send-audit.js`, then you can add a second `resend.emails.send()` call
to auto-reply to the submitter.
