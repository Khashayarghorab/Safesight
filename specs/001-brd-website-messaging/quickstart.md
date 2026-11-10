# Quickstart: Implementation Validation

This is a guide for checks after implementation. No application test result is asserted by
this planning document. Use synthetic inquiry data; do not send an email during verification.

## Prerequisites and Local Build

Use the repository's Node.js 24 and pnpm 11.25.0 toolchain in the working terminal. From the
repository root, verify the branch matches the intended feature checkout and feature pointer.
Resolve the observed Windows/WSL branch mismatch before editing; preserve unrelated changes.

```bash
git branch --show-current
git status --short
cat .specify/feature.json
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
pnpm preview
```

Preview serves the static `out/` directory at `http://127.0.0.1:3000/`. Stop any older preview
first or use it only after confirming it serves this checkout's freshly built output. Do not
push to `main`, dispatch workflows, or alter DNS as part of these checks.

## Content and Export Checks (SC-001 through SC-003)

1. Read `/`, `/technology/`, `/about/`, and `/contact/` by direct navigation. Confirm development
   status on each and all three intended benefits on home and technology.
2. Operate all three conceptual stages. Verify useful records, AI uncertainty, qualified human
   decisions and intended follow-up. Confirm the illustrative and conceptual disclosures remain.
3. Review shared FAQ, CTA, footer, title/description metadata, and social-preview descriptions
   in rendered/exported pages. Reject availability claims unsupported by evidence.
4. Audit public source and `out/` for internal BRD details, partner names/arrangements, numeric
   performance claims and safety guarantees. Search hits require contextual human review;
   generic words such as 'pilot' are not automatically prohibited.
5. Compare the wording against [contracts/public-content.md](contracts/public-content.md).
   Do not copy the BRD or planning documents into `public/` or rendered routes.

## Routes, Brand and Accessibility (SC-004 and SC-006)

1. Check home, technology, about, contact, privacy, and an unknown URL. Expected: existing pages
   load directly and unknown URL returns the custom 404. Confirm referenced local assets load.
2. Review desktop (1440 px width) and phone (320 px and 390 px widths), plus enlarged text.
   Expected: readable copy, no clipping/overlap or horizontal scrolling, unchanged brand assets.
3. Using keyboard only, navigate the skip link, menu, workflow tabs, FAQ and inquiry controls.
   Verify visible focus, Escape menu dismissal, stage arrow/Home/End keys, and panel labels.
4. Enable reduced motion; confirm revised presentation does not introduce motion that bypasses
   the existing preference. Check labels, image descriptions and announced inquiry statuses.

## Inquiry Regression (SC-005)

| Scenario | Expected result |
| --- | --- |
| Empty required inputs | Browser validation blocks draft generation |
| Invalid work email | Email validation blocks draft generation |
| Whitespace-only name, organization or message | Existing validation rejects the values |
| Valid synthetic details | Correct recipient, interest-based subject and visible draft; nothing sent |
| Message with `&`, `?`, Unicode and line breaks | Preview and decoded mailto retain intended content |
| Edit after generating a draft | Previous preview/actions clear rather than exposing stale content |
| Copy permitted | Clipboard contains intended recipient, subject and message; status is accurate |
| Copy denied/unavailable | Failure message and download/selectable-text fallback remain usable |
| Download draft | `SafeSight-inquiry.txt` contains expected recipient, subject and body |
| Email link inspection | Encoded draft opens only on visitor action; no website submission claim |

For the clipboard-denied case, deny clipboard access in the test browser where supported;
record an untested limitation if the environment cannot exercise it. Inspect the email link
without sending. External mail-client delivery is outside these website checks.

Inspect network and browser storage while typing, generating and editing the draft. Expected:
no new form-submission request, analytics request, cookie or persistent form storage. A
user-initiated downloaded file or clipboard copy is the existing explicit output.

## Record Results

Update `docs/VALIDATION.md` with actual dates, checkout/build context, passed checks and limits.
Do not relabel historical checks as current results. Record unavailable browser/clipboard cases
explicitly and resolve material acceptance gaps before claiming completion. Review the final
diff for changes outside messaging and any necessary wrapping adjustments. No `test` or `lint`
command is assumed; no new test framework is required for copy-only implementation.

Before any separately authorized release, reconcile hosting documentation with the active CI
workflow and verify production routing/headers on the chosen host. Local validation does not
establish production hosting, DNS, TLS, or publication status.
