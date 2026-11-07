# Verification — redesigned version

Verified November 7, 2026.

## Build and routes

- Production Next.js build passed, including static export.
- TypeScript check passed.
- HTTP 200 confirmed for all five pages, sitemap, robots, both photos, all logo variants, font, and Azure configuration.
- Sixteen referenced local asset URLs returned HTTP 200.
- Unknown route returned the custom 404 with HTTP 404.
- The owner-supplied email appears in the exported contact page.

## Browser checks

- Visually reviewed the desktop homepage at 1440 × 1000 and phone homepage at 390 × 844.
- All five pages checked at 320 px width. A homepage image sizing issue was found, corrected, and verified with no overflowing elements.
- Technology and contact pages visually reviewed.
- Mobile menu opened and closed; Escape dismissal and closing after navigation passed.
- Technology tabs changed their panels. Arrow-key navigation correctly selected the next stage.
- FAQ expanded and collapsed.
- Empty form submission was blocked by required-field validation.
- Valid test input generated the correct recipient, interest-based subject, encoded message, and a visible draft preview. Ampersands and line breaks were correctly encoded.
- Draft download filename checked. Editing an input removed the obsolete draft.
- No browser warnings or errors appeared in the inspected console.

## Verification limits

No email was sent. Actual email-client launching/delivery and clipboard permissions depend on the visitor's device. The copy control and download destination were not end-to-end tested. This is not an exhaustive accessibility or cross-browser audit.

Azure credentials, hosting behavior, DNS, and TLS have not been tested because deployment is not authorized. The public-launch privacy details still need owner review.
