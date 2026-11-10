# Feature Specification: General BRD-Aligned Website Messaging

**Feature Branch**: No feature branch created; current branch is `main`.

**Created**: 2026-11-09

**Status**: Draft

**Input**: User description: "Update the SafeSight website to reflect the BRD at a general level. Explain the intended value of easier safety documentation, AI-assisted review, and corrective-action follow-up. Keep safety decisions human-led and distinguish planned capabilities from verified functionality. Preserve the existing branding, accessibility, and inquiry flow. Keep detailed requirements, pilot arrangements, and internal business information off public pages."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand the Intended Value (Priority: P1)

As a safety manager or construction-team visitor, I want to understand how SafeSight intends
to support documentation, review, and follow-up so I can judge whether a conversation is relevant.

**Why this priority**: The current emphasis on hazard recognition leaves the broader intended
business value unclear. Visitors need a practical explanation without promises of proven results.

**Independent Test**: Read the home and technology pages without submitting an inquiry.
A reviewer can identify all three intended benefits and their development status.

**Acceptance Scenarios**:

1. **Given** a visitor opens the home page, **When** they read its main introduction and benefit
   content, **Then** they find plain-language explanations of easier safety documentation,
   AI-assisted review, and corrective-action follow-up, described as intended value.
2. **Given** a visitor opens the technology page directly, **When** they explore the intended
   workflow, **Then** it connects field observations and notes to structured records, human
   review of AI suggestions, and follow-up on actions without implying these are live features.
3. **Given** a visitor reads the about page, **When** they review SafeSight's purpose, **Then**
   its description supports these practical goals consistently with the other pages and does
   not promise injury prevention or measured time savings.

---

### User Story 2 - Recognize Limits and Human Responsibility (Priority: P1)

As a prospective collaborator, I want to distinguish planned product capabilities from the
working website and understand who makes safety decisions so I can evaluate claims accurately.

**Why this priority**: A concept walkthrough must not be mistaken for a functioning safety
system or an assurance that an area is safe.

**Independent Test**: Review each public entry page, the workflow, and frequently asked questions
for development status, human responsibility, and unsupported capability claims.

**Acceptance Scenarios**:

1. **Given** a visitor opens home, technology, about, or contact directly, **When** they read the
   product description, **Then** its in-development status is stated on that page and proposed
   capabilities use language that distinguishes intent from current availability.
2. **Given** the workflow describes AI review, **When** a visitor reads that stage, **Then**
   suggestions require qualified human review and may be incomplete or incorrect; people retain
   responsibility for safety assessment and action decisions.
3. **Given** follow-up is described, **When** a visitor reads the explanation, **Then** it describes
   intended support for recording responsibilities and checking progress without promising
   automatic resolution, verified closure, or existing action-management functionality.
4. **Given** a visitor reviews public copy, captions, frequently asked questions, and search
   previews, **When** they assess readiness claims, **Then** there are no invented customers,
   operating pilots, certifications, performance figures, or guaranteed safety outcomes.

---

### User Story 3 - Explore and Inquire with Familiar Controls (Priority: P2)

As an interested visitor using a phone, desktop, or keyboard, I want the familiar website and
inquiry options to remain usable so I can contact SafeSight after reading the revised message.

**Why this priority**: A messaging update must preserve the existing path from learning to inquiry.

**Independent Test**: Navigate the revised pages on phone and desktop, operate interactive
content by keyboard, and prepare an inquiry using non-sensitive test details.

**Acceptance Scenarios**:

1. **Given** the revised pages, **When** a visitor navigates by keyboard or at a narrow screen
   width, **Then** controls remain labelled and operable, focus remains visible, and text does
   not overlap or require horizontal scrolling.
2. **Given** a valid inquiry, **When** the visitor prepares it, **Then** they see the existing
   recipient, subject and message preview, email-draft option, copy option, and download option;
   the website clearly states nothing has been sent.
3. **Given** missing or invalid required details, **When** the visitor attempts to prepare an
   inquiry, **Then** validation blocks the draft; editing an existing draft clears stale content.
4. **Given** a visitor compares the revised website with its existing identity, **When** they
   inspect navigation and visual presentation, **Then** the supplied logos, black/white/yellow
   palette, imagery disclosures, and existing routes remain recognizable and consistent.

### Edge Cases

- A visitor lands directly on technology or about: development status and human-led decision
  language remain understandable without first visiting home.
- A visitor sees an illustrative scenario: its wording and captions do not imply an actual
  pilot, confirmed hazard, autonomous decision, or completed product operation.
- Longer revised copy appears at 320 px width or enlarged text: content and controls remain
  readable without clipping or horizontal overflow.
- A visitor cannot open an email app or use the clipboard: existing copy/download alternatives
  and honest failure/status messages remain available.
- Shared wording or search previews lag behind page copy: the content review includes these
  surfaces to prevent contradictory product descriptions.
- Follow-up wording could imply completion: it remains an intended organizational benefit,
  with human responsibility and no suggestion that assignment guarantees action or closure.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The home page MUST explain all three intended benefits: less repetitive safety
  documentation, AI-assisted review, and support for corrective-action follow-up.
- **FR-002**: The technology page MUST explain a conceptual journey from field observations and
  notes to useful records, human review of AI suggestions, and action follow-up. Wearable capture
  MAY be described generally without equipment commitments or detailed operating requirements.
- **FR-003**: The about page MUST communicate the same practical product purpose. Contact copy,
  shared calls to action, frequently asked questions, and search-preview descriptions MUST NOT
  contradict the revised messaging.
- **FR-004**: Home, technology, about, and contact MUST each state that the product is in
  development. Planned product capabilities MUST be clearly qualified in their surrounding
  content, and the interactive walkthrough MUST remain identified as conceptual.
- **FR-005**: AI-review explanations MUST state that AI may be incomplete or incorrect and
  qualified people review suggestions and decide appropriate safety actions. Site procedures,
  training, supervision, and protective equipment MUST NOT be presented as replaced by SafeSight.
- **FR-006**: Follow-up content MUST describe intended support for organizing action
  responsibilities and progress without claiming autonomous action, guaranteed closure,
  automatic notifications, or working action-management functionality.
- **FR-007**: Revised public content MUST NOT publish detailed BRD requirements or identifiers,
  acceptance thresholds, pilot organizations or arrangements, budgets, dates, commercial terms,
  internal decisions, or internal source documents. General invitations to discuss potential
  collaboration MAY remain without implying an agreed pilot.
- **FR-008**: Public copy, captions, and search previews MUST NOT introduce unverified performance
  metrics, safety guarantees, customer commitments, certifications, or commercial availability.
  Documentation benefits MUST remain intended outcomes rather than measured improvements.
- **FR-009**: The update MUST preserve existing logos, palette, illustrative-image disclosures,
  public page addresses, navigation destinations, and contact destination.
- **FR-010**: Revised content MUST preserve keyboard navigation, visible focus, input labels,
  announced status messages, meaningful image descriptions, reduced-motion support, and usable
  phone/desktop layouts. Changed content MUST fit at 320 px width without horizontal overflow.
- **FR-011**: The inquiry flow MUST preserve its required fields and validation, draft preview,
  recipient, subject/message handling, stale-draft clearing, email-draft link, copy/download
  alternatives, and truthful success/failure states. It MUST NOT send messages automatically.
- **FR-012**: The update MUST NOT add collection, persistent storage, tracking, worker-media
  capture, or external transmission of inquiry details. The existing website privacy notice
  MUST remain accurate for the unchanged inquiry behavior.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A content reviewer can locate all three intended benefits on home and explain each
  in one sentence using only the public copy; technology illustrates all three in its journey.
- **SC-002**: All four product-facing pages state development status. Every proposed capability
  in reviewed public content is qualified as intended or in development, with zero statements
  presenting it as verified functionality without evidence.
- **SC-003**: The AI workflow explicitly identifies human review and AI limitations. Review of
  all public content finds zero autonomous safety approvals, guaranteed outcomes, invented
  performance results, or disclosures prohibited by FR-007.
- **SC-004**: On desktop and at 320 px phone width, a reviewer can navigate to all existing pages,
  operate the menu, walkthrough and frequently asked questions by keyboard, and reach inquiry
  controls with visible focus, readable content, and no horizontal overflow.
- **SC-005**: All inquiry regression scenarios pass: missing required input, invalid email,
  whitespace-only required text, valid draft generation, special characters and line breaks,
  stale-draft clearing, copy success/failure, and draft download. No test indicates a message
  was sent by the website; email-client availability is reported separately from draft creation.
- **SC-006**: Before/after review confirms the same supplied logos, palette, page addresses,
  navigation and inquiry destinations, with zero added data-collection or tracking behavior.

## Assumptions

- This is a public messaging update to the existing website, not implementation of the separate
  field-safety product. No new dashboards, action registers, capture tools, or product demos
  that process visitor data are in scope.
- Audiences remain construction teams, safety managers, and potential research or technology
  collaborators. Copy is plain-language English consistent with the existing website.
- The BRD is background for product intent, not proof of implemented capabilities. Its detailed
  requirements and pending business decisions remain internal.
- Existing page structure and conceptual walkthrough may receive concise wording changes and
  small layout adjustments needed to accommodate copy; a visual redesign is out of scope.
- Existing inquiry behavior and public contact remain the acceptance baseline. No new service
  or partner agreement is required for this content change.
- Dependencies are the current approved brand assets, the existing website behavior, and the
  constitution's evidence and privacy principles. The known hosting-documentation mismatch is
  a separate release follow-up; this feature does not select a host, change CI, or authorize
  publication.
