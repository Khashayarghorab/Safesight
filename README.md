# SafeSight – Safety Through Intelligence

A complete responsive Next.js + TypeScript + Tailwind business website prepared for safesight.ca and Azure Static Web Apps.

## What is included

- Home, Technology, About, Contact, Privacy Policy, and custom 404 pages.
- Supplied official logo and black / white / safety-yellow identity.
- Custom editorial construction imagery, clearly presented as illustrative.
- Interactive three-stage technology walkthrough with keyboard navigation.
- Expandable FAQ, mobile navigation with Escape support, and reduced-motion support.
- Inquiry form that creates a reviewable email draft for **khashayar.ghorab@ucalgary.ca**.
- Copy and download alternatives for visitors without a desktop email app.
- Local fonts, optimized WebP images, metadata, sitemap, and robots file.
- Static export, Azure configuration, and a manual-only deployment workflow.

SafeSight is consistently described as in development. There are no invented customers, performance numbers, certifications, team biographies, or operating pilots.

## Local preview

The site is being previewed at http://127.0.0.1:3000/. It is only accessible on this computer while the preview process is running.

To start a preview from an existing build:

```sh
node scripts/preview.mjs
```

For development, use Node.js 24 and pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

To check and rebuild:

```sh
pnpm typecheck
pnpm build
pnpm preview
```

The ready-to-host static website is generated in `out/`. No Next.js server or database is required in production.

## Inquiry behavior

The public address supplied by the owner is in `lib/site.ts`. Optionally override it with `NEXT_PUBLIC_CONTACT_EMAIL` before building. The address is public, not a secret.

The form validates required fields and email format, creates a preview, and provides an encoded mailto link, a copy control, and a text-file download. Editing a field clears an obsolete draft. The website never claims a message has been sent. The visitor must send it from their email service.

The form does not make a submission request, store details in localStorage, or add anyone to a mailing list. If a future version should send messages directly, it needs an approved delivery service/backend and revised privacy content.

## Deployment and remaining launch decisions

Read [the Azure and domain guide](docs/DEPLOYMENT.md). No cloud resources have been created, no site published, and no DNS records changed.

Before public launch:
1. Approve the site and confirm the supplied email should remain public.
2. Finalize the responsible business identity, retention schedule, and hosting details in the Privacy Policy.
3. Authorize the Azure deployment, verify its preview, then connect safesight.ca.

## Project map

- `app/`: pages, metadata, and responsive styling
- `components/`: navigation, workflow, FAQ, and inquiry UI
- `lib/site.ts`: shared contact and site settings
- `public/brand/`: official artwork and unchanged-path white/icon adaptations
- `public/images/`: self-hosted optimized construction imagery
- `public/fonts/`: local Geist fonts and bundled license
- `public/staticwebapp.config.json`: Azure routing and response headers
- `.github/workflows/azure-static-web-apps.yml`: manual deployment
- [Validation](docs/VALIDATION.md)
- [Asset provenance and generation prompts](docs/ASSETS.md)
