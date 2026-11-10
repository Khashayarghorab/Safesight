# SafeSight Website Constitution

## Core Principles

### I. Evidence-Based Communication and Human Review

Public content MUST distinguish implemented website behavior, intended product capabilities,
and validated results. Development-status statements and illustrative-image labels MUST remain
accurate. Customer relationships, pilots, certifications, performance, and business outcomes
MUST NOT be invented or inferred from proposed requirements.

Product descriptions MUST preserve qualified human review and communicate that AI assistance
can be incomplete or incorrect. They MUST NOT imply autonomous safety approval, guaranteed
hazard detection, or certification that a site is safe. The BRD informs general goals of useful
records, reduced administration, traceable decisions, and accountable follow-up; its proposed
requirements MUST NOT be presented as delivered capabilities or commercial commitments.

### II. Simple, Typed, Static Architecture

The website MUST retain the existing Next.js App Router, React, TypeScript, and Tailwind
architecture unless a documented requirement justifies a change. TypeScript strict mode MUST
remain enabled. Pages and metadata belong in `app/`, reusable interface elements in
`components/`, shared site settings in `lib/site.ts`, and local assets in `public/`.

Changes MUST remain compatible with static export to `out/`, trailing-slash routes, and hosting
without a Next.js server or database. Client components MUST be limited to interactions that
need browser state or APIs. New dependencies, services, and abstractions MUST have a concrete
purpose and documented maintenance cost; reuse existing components and configuration first.

### III. Verification Proportionate to Change

Application changes MUST pass `pnpm typecheck` and `pnpm build` before release. CI dependency
installation MUST use the committed lockfile with `pnpm install --frozen-lockfile`.
Verification MUST state what was checked, its result, and material limits; historical checks
MUST NOT be represented as verification of a later change.

Behavioral changes MUST receive focused checks of observable outcomes and relevant failure
cases. Inquiry changes MUST cover required fields, whitespace input, encoded message content,
draft invalidation, and truthful status messages. Navigation and interaction changes MUST
include keyboard and narrow-screen checks. Route or asset changes MUST verify direct
navigation, referenced assets, and the custom 404 in the exported site.

Repeatable or complex behavior MUST receive automated regression coverage when practical;
manual browser checks are acceptable for focused visual changes when recorded. The repository
currently has no test or lint script: reviews MUST NOT claim either ran. New tooling MUST be
introduced explicitly with documented commands rather than assumed from template examples.

### IV. Privacy and Security by Default

The inquiry flow MUST remain a browser-generated, reviewable email draft unless a separately
specified delivery change is approved. It MUST validate input, encode generated links, expose
copy failures, and state accurately whether anything has been sent. Inquiry data MUST NOT be
silently transmitted, persisted, or reused. New collection, analytics, storage, or third-party
processing MUST include a stated purpose, data flow, and corresponding privacy-notice update.

Secrets and deployment credentials MUST NOT appear in source, exported files, or logs.
`NEXT_PUBLIC_*` variables MUST be treated as public build output. CI permissions MUST be
limited to actual workflow needs. Hosting security headers and privacy statements MUST be
verified on the selected host; an Azure configuration file does not establish GitHub Pages
behavior. Future field-pilot imagery and personal information require separate data-handling
arrangements and MUST NOT be collected through this marketing site by default.

### V. Accessible and Maintainable User Experience

Changes MUST preserve semantic controls, input labels, visible focus, keyboard operation,
appropriate status announcements, meaningful alternative text, and reduced-motion support.
Changed layouts MUST remain usable on phone and desktop screens without horizontal overflow.
Interactive elements MUST make state and recovery steps clear, including unavailable clipboard
or email-client behavior.

The supplied brand assets and black, white, and safety-yellow identity MUST remain consistent.
Fonts and imagery MUST remain self-hosted unless an explicit requirement justifies an external
source. Asset provenance and licenses MUST be retained. Shared content and navigation MUST use
existing central definitions to avoid inconsistent updates. Documentation MUST accompany
changes to public behavior, configuration, architecture, or verification commands.

## Architecture and Product Boundaries

This constitution governs the public SafeSight website repository. It does not establish the
architecture or detailed acceptance criteria of the separate field-safety product. The BRD
provides business context; detailed workflows, hardware choices, partner arrangements, and
pilot targets belong in their own approved specifications.

The toolchain baseline is Node.js 24 and pnpm 11.25.0, matching current CI. Toolchain and
dependency updates MUST retain lockfile consistency and pass the existing quality gates.
Runtime services, authentication, databases, and AI processing MUST NOT be added solely
because they appear in future-product descriptions.

The active workflow is `.github/workflows/deploy-github-pages.yml`; it builds and deploys on
pushes to `main` and supports manual dispatch. The README and deployment guide still describe
manual Azure deployment. This mismatch MUST be resolved before relying on those documents for
a release. Host selection MUST determine routing, asset paths, canonical URLs, security-header
verification, and deployment instructions. Historical documentation is not evidence of current
hosting or publication status.

## Development and Release Workflow

1. Read the affected code and project guidance. State the intended user-visible result and
   applicable principles before planning a material feature or architecture change.
2. Keep changes focused and explain added complexity. Update documentation when behavior or
   operating assumptions change. Maintain requirement traceability without copying detailed
   BRD content into public pages.
3. Run applicable type, build, and behavioral checks. Record results and limitations in the
   change description; update `docs/VALIDATION.md` when its documented baseline changes.
   Documentation-only changes require content, link, and consistency checks; rebuilding an
   unchanged application is not required.
4. Review the diff for unsupported claims, accessibility regressions, data handling, exposed
   secrets, static-export compatibility, and deployment effects. Resolve failed checks before
   release or explicitly document a bounded exception and its approver.
5. Treat a push or merge to `main` as a deployment action under the current workflow. Obtain
   the owner's release authorization before triggering publication; permission to edit locally
   alone does not authorize deployment. Confirm applicable business identity, public contact,
   retention, and hosting statements before public launch.
6. Verify deployed HTTPS routes, assets, inquiry behavior, and the 404 response on the actual
   host. Keep a known-good source revision and document rollback through the selected process.
   Local preview alone does not verify production routing, headers, DNS, or TLS.

## Governance

This constitution is the governing baseline for specifications, plans, implementation reviews,
and releases in this repository. Reviews MUST identify applicable principles and justify any
exception with its scope, reason, owner approval, and follow-up. Exceptions MUST NOT silently
redefine a principle or make an unsupported public claim.

Amendments MUST state their reason, affected principles, impact on existing work, and migration
or documentation follow-up. The project owner or designated maintainer reviews amendments
before merge. Versioning follows semantic versioning: MAJOR for incompatible principle removals
or redefinitions, MINOR for new principles or materially expanded guidance, and PATCH for
clarifications without changed obligations. Preserve the original ratification date and update
the last-amended date when governance changes.

Version 1.0.0 establishes the first project-specific baseline from the unratified scaffold.
Dependent Spec Kit templates and commands read this file at runtime; constitution updates
MUST NOT silently modify application code, templates, or deployment configuration.

**Version**: 1.0.0 | **Ratified**: 2026-11-09 | **Last Amended**: 2026-11-09
