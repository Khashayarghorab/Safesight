# Data Model: Content Concepts and Existing Inquiry State

This feature adds no database, persisted entity, backend, or visitor-data model. The concepts
below describe copy and existing transient behavior, not new software types or stored records.

## Public Capability Statement

- Attributes: benefit (documentation, AI review, or follow-up), plain-language explanation,
  development qualifier, applicable limitation, and public surface.
- Relationship: repeated statements across pages and metadata describe the same intended value.
- Validation: a planned capability must not become a present-tense availability or performance
  claim; human review accompanies AI explanations; internal details stay excluded.
- Lifecycle: draft wording -> content review -> approved wording -> public only after release.
  These are editorial states, not a new workflow implemented on the site.

## Conceptual Workflow Stage

- Attributes: existing stage label, explanatory body, illustrative panel title/body, tags, note.
- Relationships: three ordered stages share one illustrative scenario and one active panel.
- Validation: field context leads to useful records, AI suggestions remain uncertain, and people
  make decisions and oversee follow-up. Existing labels and accessible associations remain intact.
- State: exactly one active stage; click and existing keyboard controls change the active panel.
  No real inspection, AI analysis, record finalization, or corrective action is performed.

## Existing Inquiry Draft (Unchanged)

- Inputs: name, work email, organization, interest, message.
- Derived content: recipient from existing site settings; subject from interest; body from inputs.
- State: editing -> valid submission prepares draft; invalid submission blocks preparation;
  subsequent field edits clear the previous draft and status. Copy success/failure updates status.
- Outputs: visible reviewable preview, encoded mailto link, clipboard copy, downloadable text.
- Retention: React/browser memory during the current page session; no new persistence or server
  submission. User-initiated copy and download retain existing behavior on the user's device.
- Validation: required values, email format, whitespace rejection where currently checked,
  existing input limits, encoded special characters and line breaks, truthful status messages.

No new external interface, schema migration, or data ownership decision is introduced.
