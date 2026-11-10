# Research: General BRD-Aligned Website Messaging

## Evidence Base

Repository sources reviewed: README, constitution, feature specification, package scripts,
Next.js configuration, TypeScript configuration, deployment workflow, existing pages,
`components/workflow.tsx`, `components/shared.tsx`, `components/inquiry.tsx`, shared site settings,
root metadata, and preview server. The supplied BRD informs general business intent only.
These findings concern the local project; no claims about current external services are needed.

## Decision 1: Extend Existing Copy Rather Than Build Product Features

**Decision**: Communicate documentation, AI review, and action follow-up as intended value in
the current home, technology, about, contact, and shared content surfaces.
**Rationale**: Existing copy emphasizes potential hazards; the specification broadens its
message while preserving development status and human responsibility.
**Alternatives considered**: Full BRD publication would expose internal requirements; building
an action register or inspection tool would exceed the website feature scope.

## Decision 2: Preserve the Three-Stage Walkthrough

**Decision**: Retain Observe / Understand / Decide and its tab IDs, associations, roving focus,
arrow/Home/End key handling, image, and conceptual disclosure. Update text to include records
and human-led follow-up without adding a fourth stage.
**Rationale**: The existing final stage can describe human action decisions and intended
follow-up. Existing interactions already support the required explanation.
**Alternatives considered**: New stages, live demos, or a redesigned workflow add interaction
risk without a requirement for additional UI behavior.

## Decision 3: Use Nearby Qualifiers and Consistent Search Descriptions

**Decision**: Describe intended benefits with development qualifiers; state AI limitations at
the review stage. Audit shared description, page metadata, FAQ, CTA and footer for consistency.
**Rationale**: Direct entry and search previews must not turn conceptual capabilities into
availability claims. Root metadata already consumes `site.description`.
**Alternatives considered**: A single footer disclaimer is insufficient context for product
claims elsewhere; duplicating all metadata or creating a new content system is unnecessary.

## Decision 4: Preserve Inquiry and Data Handling

**Decision**: Leave inquiry behavior intact and verify it as a regression boundary.
**Rationale**: Current behavior validates inputs, prepares a transient draft, encodes links,
clears stale drafts, and provides copy/download alternatives without sending or storing data.
**Alternatives considered**: Server submission, analytics, and tracking are unnecessary scope
expansions and would require separate privacy and delivery decisions.

## Decision 5: Verify Content and Existing Behavior Proportionately

**Decision**: Use the committed toolchain and lockfile, typecheck and production export, then
focused browser checks and a manual public-claim audit. Record results only when executed.
**Rationale**: No test/lint scripts exist; the feature primarily changes copy but can regress
wrapping, metadata, accessibility, or existing inquiry behavior.
**Alternatives considered**: Adding a test framework solely for string assertions mirrors
implementation; build-only checks cannot establish the messaging or browser acceptance goals.

## Decision 6: Separate Editing from Release

**Decision**: Resolve branch identity before implementation and keep deployment outside scope.
**Rationale**: Supplied WSL setup reports the feature branch; Windows Git reports `main`.
The current workflow publishes on pushes to `main`, while documentation describes manual Azure
hosting. Neither output alone establishes production status.
**Alternatives considered**: Automatic branch switching or pushing could disturb work or trigger
publication. Updating hosting configuration here would broaden the feature without user intent.

All design questions are resolved with existing sources. Branch alignment is an operational
check before implementation, not an unresolved product requirement.
