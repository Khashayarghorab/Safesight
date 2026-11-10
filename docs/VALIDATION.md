# SafeSight-related blog filtering

- Topic matching now filters all available RSS candidates before the three-card limit.
- Relevant safety/assessment/smart-glasses and construction AI-method posts are included;
  hiring, conference announcements, general news and unrelated project topics are excluded.
- Curated editorial selections remain available as fallback/fill; duplicate URLs are removed.
- node --test scripts/check-research-feed.mjs: 10 passed, 0 failed, including older relevant
  posts after newer unrelated posts, unrelated-only feeds and duplicate-free fallback fill.
- WSL production build and live-feed visual validation remain pending. Not deployed.

---

# Build-time EPM Research RSS integration - verification

- Research page is an async force-static server page. It fetches EPM Research RSS during
  generation, displays up to three newest unique posts and uses the existing curated cards
  if the request fails or returns no usable entries. No publication/ongoing-study order changed.
- The RSS reader supports the Substack RSS 2.0 item fields used here; it is not a general
  XML processor. Entity/DOCTYPE declarations are rejected. Descriptions render as plain text,
  not raw HTML. Links are restricted to known EPM Research hosts and HTTPS.
- Feed request has an eight-second abort signal; feed parsing checks a 2 MB size bound.
  Cover images are limited to approved publisher image hosts and use no-referrer requests.
- Updated privacy text for external blog image requests; no subscription embed, client-side
  RSS request, analytics or form submission was introduced.
- node --test scripts/check-research-feed.mjs: 7 passed, 0 failed. Cases cover field extraction,
  text/entity handling, ordering/deduplication, unsafe links, image hosts, unsupported markup,
  successful fetch and network/HTTP/empty-feed fallback. Network tests use mocked responses.
- Syntax parsing passed for app/research/page.tsx, app/privacy/page.tsx and lib/research.ts.
- Still pending: WSL typecheck/production build and visual QA against a live fetched feed.
  Actual feed item parsing has not been verified from this network-restricted shell.
- No scheduled rebuild, push or deployment was performed for this integration. Blog cards
  refresh with new CI builds; local Next.js fetch cache may retain an older response.

---

# Ongoing studies, blog links and affiliation refinement - verification pending

- Added four user-supplied ongoing studies with focus/status: manuscript in progress
  (experiments completed), planned, abstract prepared, planned. No target journals or
  conference venue are stored or displayed for these entries.
- Research now has anchor navigation for ongoing work, five published studies and three
  curated EPM Research blog links. Each blog card credits authors, shows publication date
  and links to the original; original short descriptions replace copied article bodies.
- Blog sources verified November 9, 2026: epmresearch.com/p/how-to-train-your-genai-dragon,
  epmresearch.com/p/brace-for-ai-risk-management-failures and epmresearch.com/p/ai-takes-shape.
- About-only affiliation now links to https://epmresearch.com/ and https://www.ucalgary.ca/.
  Revised optical sizing/white-space framing preserves original logo bytes and proportions.
- Removed the named project-contact card and Email Khashayar wording. Generic SafeSight
  contact wording uses the same existing public mailbox. Author names remain in citations.
- Syntax checks passed for four affected TS/TSX modules. Data checks passed for 4 ongoing
  studies, 5 publications, 3 attributed posts, venue exclusion, links, dates and contact wording.
- Pending: WSL typecheck/build and visual QA for logo sizing, ongoing cards, section anchors,
  long titles and outgoing links at desktop/phone widths. New work is not deployed.

---

# About affiliation and research library - verification pending

- Per owner correction, institutional wording and logos appear only on About. Removed
  Home affiliation component and global footer attribution. Home has no institutional claim.
- Redesigned About affiliation as a distinct research-environment panel with two original
  logo cards and descriptive captions, plus a link to the new Research page.
- Added /research/ and navigation/sitemap entry. Five supplied studies display full titles,
  supplied author lists, journals, citations, years, topics, publisher links and original
  Google Scholar links. No abstracts or product-performance claims were added.
- Publications live in lib/research.ts; README describes adding entries. First entry is
  highlighted and display count derives from list length. No CMS or editing backend added.
- Citation source basis: user bibliography plus publisher search records from ASCE, Elsevier
  and MDPI. Direct ASCE page fetching returned 403; no claim of full-paper review is made.
- All eight changed/new research-related TS/TSX modules parsed successfully. Research data
  loaded under Node with five unique ids, populated citation fields and valid HTTPS URLs.
- Static checks confirm no affiliation text/component in Home or the shared footer.
- Added the fifth navigation link; menu switches to the existing mobile pattern at 1100 px
  to allow room for Research. Keyboard/Escape logic and inquiry behavior are unchanged.
- Pending: WSL typecheck/build and visual/browser QA of About/Research at 320, 390, 980,
  1100 and 1440 px; menu operation, publication links, logo loading and heading readability.
- This update remains local and is not deployed.

---

# Research affiliation update - verification pending

- Owner confirmed development at EPM Research at the University of Calgary and supplied
  both logos. Added an accessible shared affiliation section to Home/About, an About
  introduction and a footer attribution.
- Original image files copied without alteration; exact byte comparisons passed.
- Syntax parsing passed for all four changed/new affiliation TSX files.
- Remaining: WSL typecheck/build and responsive logo layout/image-loading check.
- These additions and the preceding homepage improvements have not been deployed.

---

# Homepage clarity and product concept - verification pending

New update requested after deployment of commit 094fb73.

- Clearer hero supporting text and more specific safety-manager audience copy.
- Static, accessible product concept replaces duplicated homepage technology tabs; the
  technology page retains its original keyboard-operated walkthrough. The concept labels
  all content as illustrative and makes no claim of live analysis, approval or assignment.
- Primary navigation/hero/shared CTA uses Start a conversation; destination remains the
  existing inquiry section. Contact title/eyebrow follow the same wording.
- About adds Khashayar Ghorab as project contact using the existing public email. No
  unverified credentials, founder biography, customers or partnerships were added.
- All six edited TSX files parse successfully; new CSS was reviewed separately.
  This is syntax review, not a new typecheck or production build.
- Source byte comparison confirms inquiry, technology workflow, site settings, dependencies
  and privacy page unchanged. Privacy business/retention facts and a real form-submission
  service require information and a separately specified implementation.
- Pending: WSL typecheck/build, 320/390/1440 px visual check, CTA destinations, concept
  disclosure/readability, mobile menu, technology tabs, FAQ and inquiry regression.
- No push or publication of this new update has occurred.

---

# BRD messaging update - browser verification

Reviewed November 9, 2026. Results below apply to the first updated-copy export.
The narrow-header CSS correction made after these checks is not yet rebuilt or verified.

## Passed checks

- User-provided WSL results: Node v24.22.2, pnpm 11.25.0, frozen-lockfile install,
  pnpm typecheck, Next.js production build and static export all passed.
- Browser directly opened home, technology, about, contact, privacy and an unknown path.
  The custom 404 rendered; HTTP status was not independently verified.
- Reviewed rendered copy and exported metadata for intended documentation/review/follow-up
  benefits, nearby development qualifiers, AI limitations and human responsibility.
- Scanned all 49 exported text files for internal BRD identifiers, prospective partner name,
  internal file references and document title; no matches found.
- Workflow: ArrowDown, End and Home selected the correct panels; new FAQ expanded by Enter.
- Mobile menu opened; Escape closed it and returned focus to the menu toggle.
- Inquiry: missing input and invalid email blocked preparation; whitespace-only name rejected;
  valid synthetic input produced a focused preview and truthful nothing-sent message.
- Encoded mailto retained ampersand, question mark, Unicode and line breaks.
- Copy succeeded; clipboard text matched the synthetic draft. Editing organization removed
  the old draft/actions.
- Download link supplied SafeSight-inquiry.txt with correct recipient, subject and body.
  Browser download-event reporting timed out, but the resulting file was found in Downloads
  and its contents independently read and verified. No email client was launched or mail sent.
- Desktop and phone content reviewed at 1440, 390 and 320 px; 390 px about page had no
  horizontal overflow. Main content on 320 px technology had no out-of-bounds elements.

## Correction awaiting final build

At 320 px, the unchanged menu-toggle/header gap produced a right edge of 307.75 px against
a 305 px available document width. Reduced .nav-shell gap from 30 px to 10 px only inside
the existing max-width:360px rule. No logo, palette, interaction, or inquiry change was made.
Rebuild in WSL, then recheck 320 px routes and menu, plus affected enlarged-text layouts.

## Verification limits

### Homepage video addition — November 10, 2026

Added owner-supplied YouTube video PQEO9dbzTLs after the homepage product concept.
Source review confirms a native keyboard-operable Play button, titled responsive
iframe, local illustrative cover, and no YouTube
request from this section before Play. Local cover path exists; diff whitespace
checks passed. Updated the privacy notice for optional YouTube processing.
Typecheck cannot run on this Windows host because the installed TypeScript
platform package is Linux-only; Next build also fails loading WSL-installed
dependencies. WSL execution is denied here. Build, keyboard, mobile layout,
embedding availability, and playback checks remain pending in WSL/browser.

Clipboard-denied behavior, separate whitespace organization/message cases, enlarged text,
reduced-motion emulation and live network/storage inspection remain untested. Unchanged source
provides privacy/interaction evidence but does not substitute for those browser scenarios.
The shell could not access local HTTP sockets; browser navigation worked. Logs inspected
showed Zotero extension errors, not an identified website error.
No production deployment, DNS/TLS verification, push, or email send occurred. The existing
hosting-documentation mismatch remains a release follow-up.

---

# BRD messaging update - verification in progress

Reviewed November 9, 2026. This section concerns the current messaging update; the historical
November 7 report below is retained and does not verify these edits.

## Setup and source checks completed

- User-supplied WSL prerequisite output resolved this feature and its design/task documents.
- Specification checklist: 16 checked items, zero unchecked. No extension hooks configured.
- Both current Windows Git and user WSL output report main; local edits use the explicit
  feature pointer without switching branches or publishing.
- User reported frozen-lockfile installation completed using pnpm 11.25.0. Node 24 still
  needs explicit confirmation in the build terminal. Windows Node is v26.13.0.
- Baseline source inspection confirmed existing required inputs, email validation, whitespace
  checks, encoded draft outputs, stale-draft clearing, clipboard fallback and live status.
  These observations describe code, not a new browser regression result.
- Updated home, technology, about, contact, workflow, FAQ/CTA and shared descriptions.
  Source review found the three intended benefits, qualified capability language, human
  responsibility, AI limitations and development status; no detailed BRD content was added.
- All seven changed TypeScript/TSX files parsed successfully with the installed Next.js bundled
  Babel parser using TypeScript and JSX syntax. This is a syntax check, not type checking.
- Byte comparisons against HEAD confirmed components/inquiry.tsx, components/site.tsx,
  app/globals.css, app/layout.tsx, app/privacy/page.tsx, package.json and pnpm-lock.yaml unchanged.
- Source scan found no internal requirement IDs, BRD decision codes, named prospective partner,
  internal file references or budget amounts in the revised public source. Manual copy review
  also checked that proposed benefits were not described as verified operation/results.

## Remaining verification

Windows Node cannot load the WSL-installed dependency symlinks (permission denied while reading
@swc/helpers/package.json). No pnpm typecheck, production build, export-route check, or browser
regression has passed for this update yet. Run the existing commands in WSL; no reinstallation
or upgrade is needed unless a specific error requires it.

Pending: rendered metadata/claim audit, 320/390/1440 px layout and enlarged text checks,
keyboard/menu/tabs/FAQ, reduced motion, all inquiry scenarios including clipboard denial and
download contents, network/storage inspection, local assets and custom 404 response.
No CSS adjustment was made without an observed layout regression. Existing logo/assets and
privacy behavior remain unchanged in source. Record each actual pass/failure before completion.

No email was sent; no commit, push, deployment or DNS change was performed. The existing
Azure documentation versus GitHub Pages workflow mismatch remains a separate release follow-up.

---

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

## GenAI Dragon cover correction

The curated record previously had no image. Added the original article image and a merge
rule that retains it when RSS lacks a cover. Article matching handles publisher domain
aliases and query strings without duplicating cards. All 11 feed tests passed, including
missing-cover fallback and feed-cover precedence. Rebuild/visual verification is pending.
