# SafeSight – Safety Through Intelligence

A complete responsive Next.js + TypeScript + Tailwind business website configured for static hosting with GitHub Pages and the canonical domain safesight.ca.

## What is included

- Home, Technology, About, Contact, Privacy Policy, and custom 404 pages.
- Supplied official logo and black / white / safety-yellow identity.
- Custom editorial construction imagery, clearly presented as illustrative.
- Illustrative product-record concept on Home and a keyboard-accessible technology walkthrough.
- Expandable FAQ, mobile navigation with Escape support, and reduced-motion support.
- Inquiry form that creates a reviewable email draft for **khashayar.ghorab@ucalgary.ca**.
- Copy and download alternatives for visitors without a desktop email app.
- Local fonts, optimized WebP images, metadata, sitemap, and robots file.
- Static export and a GitHub Pages workflow that builds and deploys pushes to main.

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

Read [the deployment guide](docs/DEPLOYMENT.md). The active workflow deploys to GitHub Pages
after pushes to main and can also be dispatched manually.

The owner authorized publication of the BRD-aligned messaging update. The inquiry flow still
prepares a draft only. The privacy page retains its existing open business identity, retention
and hosting details; this update does not establish those arrangements.

## Project map

- `app/`: pages, metadata, and responsive styling
- `components/`: navigation, workflow, FAQ, and inquiry UI
- `lib/site.ts`: shared contact and site settings
- `public/brand/`: official artwork and unchanged-path white/icon adaptations
- `public/images/`: self-hosted optimized construction imagery
- `public/fonts/`: local Geist fonts and bundled license
- `public/staticwebapp.config.json`: Azure routing and response headers
- `.github/workflows/deploy-github-pages.yml`: build and GitHub Pages deployment
- [Validation](docs/VALIDATION.md)
- [Asset provenance and generation prompts](docs/ASSETS.md)

## Updating research publications

Add or edit entries in lib/research.ts. Each entry contains a unique id, title, author list,
journal, volume/issue/article citation, year, topic labels, publisher URL and Scholar URL.
All publication cards share the same styling; array order controls display order.
The Research page and its study count are generated from this list during the static build.
Run pnpm typecheck and pnpm build, preview the page, then publish through the normal workflow.
No account, database or browser administration screen is required or included.

### Ongoing studies and blog links

Edit ongoingStudies in lib/research.ts to update titles, focus, status and optional progress.
Do not add target journals or conference venues to those records. Published citations remain
in publications. Edit researchPosts to curate EPM Research links with title, short original
description, author attribution and publication date. These links are maintained manually;
there is no external embed or automatic feed. The Research page counts each list separately.
Institutional links and logo presentation are in components/research-affiliation.tsx, used
only on About. Original PNG files remain unchanged; CSS windows remove surrounding white
space for balanced presentation without modifying logo artwork.

Accepted conference papers can use venue instead of journal. Publisher and Scholar links
are optional; omitted links are not rendered. Do not invent conference names or URLs.
