# Tasks: General BRD-Aligned Website Messaging

**Input**: Design documents from `specs/001-brd-website-messaging/`.
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-content.md,
quickstart.md and `.specify/memory/constitution.md`.
**Tests**: Existing build/type checks and focused manual acceptance checks. No new test framework
or tests that simply duplicate copy strings. No backend, migrations or persisted entities.
**Organization**: Tasks follow the three independently verifiable user stories.

## Format: `[ID] [P?] [Story] Description`

`[P]` means different-file work can proceed independently within a phase after prerequisites.
Story labels map to spec.md. All tasks start unchecked; generation does not mean completion.

## Path Conventions

Paths are relative to the repository root: pages in `app/`, interactions in `components/`,
shared settings in `lib/site.ts`. Feature documents MUST NOT be copied into `public/`.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm context and reproducible tooling.

- [X] T001 Check branch, checkout root and unrelated changes against `.specify/feature.json`; reconcile Windows/WSL branch reports in `specs/001-brd-website-messaging/plan.md` without discarding work, switching a dirty checkout automatically or publishing.
- [X] T002 Verify Node.js 24 and pnpm 11.25.0 against `.github/workflows/deploy-github-pages.yml`; use `pnpm install --frozen-lockfile` with `pnpm-lock.yaml` and retain the existing `package.json` dependencies.

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared copy and regression boundaries before editing.

- [X] T003 Review `specs/001-brd-website-messaging/contracts/public-content.md` against `.specify/memory/constitution.md`; adopt its three intended benefits, development qualifiers, human-review rules and excluded internal details as the editorial baseline.
- [X] T004 Inspect baseline behavior and record actual observations in `docs/VALIDATION.md` using `components/inquiry.tsx`, `components/site.tsx`, `components/workflow.tsx`, `app/globals.css` and `lib/site.ts`; preserve contact destination, input limits, navigation, assets and interactions without relabelling historical checks as current results.

**Checkpoint**: Setup and foundation complete before story edits. Add no services or tooling.

## Phase 3: User Story 1 - Understand the Intended Value (Priority: P1) - MVP

**Goal**: Explain intended documentation, AI review and follow-up value.
**Independent Test**: Read home, technology and about and explain the three intended benefits
without interpreting them as measured outcomes or currently delivered product functionality.

### Implementation for User Story 1

- [X] T005 [P] [US1] Update introduction/hero and benefit copy in `app/page.tsx` to explain easier documentation, AI-assisted review and corrective-action follow-up as intended value; retain development status, CTA destinations and illustrative disclosures.
- [X] T006 [P] [US1] Update narrative and development priorities in `app/technology/page.tsx` to connect field observations and notes to useful records, human review and intended follow-up without presenting a live system.
- [X] T007 [P] [US1] Align purpose and mission in `app/about/page.tsx` with practical intended value; remove ambiguous injury-prevention/proven-outcome implications and retain development status and branding.
- [X] T008 [P] [US1] Revise Observe / Understand / Decide copy in `components/workflow.tsx` to cover records, uncertain AI suggestions, human decisions and intended follow-up; preserve three stages, conceptual disclosure, image, tab/panel associations and keyboard/focus handlers.

### Verification for User Story 1

- [X] T009 [US1] Review home, technology, about and both walkthrough instances against Story 1 and SC-001 in `specs/001-brd-website-messaging/spec.md`; record content-review evidence in `docs/VALIDATION.md`.

**Checkpoint**: US1 can be demonstrated locally. Existing safety/privacy safeguards still apply.

## Phase 4: User Story 2 - Recognize Limits and Human Responsibility (Priority: P1)

**Goal**: Distinguish intended capabilities from current availability and keep decisions human-led.
**Independent Test**: Directly visit four product-facing pages and inspect FAQ, workflow and
metadata for development status, human responsibility and absence of prohibited claims/details.

### Implementation for User Story 2

- [X] T010 [P] [US2] Align FAQ and shared CTA wording in `components/shared.tsx` with intended practical benefits; retain human review, AI limitations, general collaboration invitations, data disclosures and existing semantic controls.
- [X] T011 [P] [US2] Align introduction and description in `app/contact/page.tsx`; keep development status, no-agreed-pilot wording and existing inquiry placement, controls and recipient.
- [X] T012 [P] [US2] Update only the shared description in `lib/site.ts` and audit its use in `app/layout.tsx`; retain email, URL, name and navigation, avoiding duplicated metadata definitions.
- [X] T013 [US2] Review `app/page.tsx`, `app/technology/page.tsx`, `app/about/page.tsx` and `components/workflow.tsx` after US1 edits; correct missing nearby development qualifiers, AI limitations and human responsibility, without implying automatic resolution or working action-management features.
- [X] T014 [US2] Audit header/footer copy in `components/site.tsx` and metadata in `app/technology/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` and `app/layout.tsx`; make only necessary copy corrections while preserving destinations and behavior.

### Verification for User Story 2

- [X] T015 [US2] Audit public copy and, after T020, generated `out/` content against SC-002/SC-003 and `specs/001-brd-website-messaging/contracts/public-content.md`; record findings in `docs/VALIDATION.md`, excluding BRD details, pilot arrangements, budgets, dates, internal decisions and unsupported performance/readiness claims.

**Checkpoint**: US2 has a separate claims review; export verification finishes after the build.

## Phase 5: User Story 3 - Explore and Inquire with Familiar Controls (Priority: P2)

**Goal**: Retain accessible browsing and existing inquiry behavior.
**Independent Test**: Navigate by keyboard on desktop/phone and prepare a synthetic inquiry;
verify draft preview, alternatives and truthful status messages without sending an email.

### Implementation and Verification for User Story 3

- [ ] T016 [US3] Inspect revised copy at 320 px, 390 px, desktop and enlarged text using `specs/001-brd-website-messaging/quickstart.md`; adjust `app/globals.css` only for observed wrapping/overflow regressions while preserving palette, identity, focus and reduced motion.
- [ ] T017 [US3] Exercise menu in `components/site.tsx`, tabs in `components/workflow.tsx`, FAQ in `components/shared.tsx` and focus/labels/status in `components/inquiry.tsx`; verify Escape, arrow/Home/End, visible focus and reduced-motion behavior and record results in `docs/VALIDATION.md`.
- [ ] T018 [US3] Run inquiry scenarios from `specs/001-brd-website-messaging/quickstart.md` against unchanged `components/inquiry.tsx`: missing inputs, invalid email, whitespace-only values, special characters/line breaks, preview, stale-draft clearing, copy success/failure and `SafeSight-inquiry.txt` contents; record actual outcomes and limits in `docs/VALIDATION.md` without sending email.
- [ ] T019 [US3] Inspect inquiry-session network/storage and compare `components/inquiry.tsx`, `lib/site.ts`, `app/privacy/page.tsx` and `public/` against baseline; record SC-006 evidence in `docs/VALIDATION.md` for unchanged destinations, routes, assets, palette and no new collection, tracking, storage or submission.

**Checkpoint**: SC-004 through SC-006 have browser evidence. Untested material cases remain
incomplete, and affected checks must be repeated after fixes.

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T020 Run `pnpm typecheck` and `pnpm build` from `package.json` on final edited source, resolve failures and serve fresh `out/` with `scripts/preview.mjs`; record commands/results in `docs/VALIDATION.md`.
- [ ] T021 Verify home, technology, about, contact, privacy, assets and unknown-route custom 404 from `out/`; complete T015's rendered/exported metadata audit using `specs/001-brd-website-messaging/quickstart.md` and record results in `docs/VALIDATION.md`.
- [ ] T022 Review final diff and acceptance evidence against `specs/001-brd-website-messaging/spec.md` and `specs/001-brd-website-messaging/contracts/public-content.md`; finalize dates/environment/results/limits in `docs/VALIDATION.md`, preserve the separate hosting-documentation follow-up and mark only completed tasks in `specs/001-brd-website-messaging/tasks.md`.

## Dependencies & Execution Order

### Phase Dependencies

T001-T002 precede T003-T004, which block all story editing. T005-T008 precede T009.
T010-T012 can proceed independently on different files after foundation; T013 follows US1 edits,
and T014 follows overlapping page/metadata edits. T015 reviews integrated copy and finishes its
export portion after T020. US3 checks follow all copy edits; T017-T019 can use a current local
development preview. T020 follows any T016 CSS fixes. T021 verifies the fresh export and finishes
T015. T022 follows all acceptance work. Rebuild and repeat affected checks after any late fix.

### User Story Dependencies

US1 and US2 have separate review outcomes but overlapping files: serialize their integration
edits. US2 can improve original-site claims independently. US3 checks existing interaction
invariants independently, then rechecks the integrated copy. No new product infrastructure.

### Within Each User Story

Finish copy before integrated content review. Execute the specification's acceptance scenarios
and record actual evidence; do not introduce synthetic models/services to fit sample templates.

### Parallel Opportunities and Examples

- US1: T005 home, T006 technology, T007 about and T008 workflow are independent files after
  foundation. T009 reviews their combined message.
- US2: T010 shared FAQ, T011 contact and T012 shared description can proceed independently;
  serialize T013/T014 after overlapping edits.
- US3: after T016, keyboard observation (T017) and source/privacy observation (T019) can be
  separate work, but serialize edits to `docs/VALIDATION.md`. Keep T018 sequential with other
  checks using the same browser session and clipboard state.

These are scheduling options, not instructions to delegate or run concurrent agents.
No `[P]` marker is assigned to tasks sharing the evidence file or browser state.

## Implementation Strategy

### MVP First (User Story 1)

Complete setup/foundation and US1, then demonstrate intended practical value locally. Preserve
existing human-review/privacy safeguards. Full acceptance checks precede any release claim.

### Incremental Delivery

Follow with US2 consistency and claims, US3 usability/inquiry regression, then the final export.
Keep CSS edits conditional on observed regressions. Add no dependency upgrades, product features
or hosting changes. No publication is authorized by this checklist.

## Notes

- Total: 22 tasks; setup 2, foundation 2, US1 5, US2 6, US3 4, polish 3.
- Coverage: US1 addresses FR-001 through FR-003; US2 addresses FR-003 through FR-008;
  US3 addresses FR-009 through FR-012; final export review verifies combined outcomes.
- Preserve existing transient inquiry constraints and state transitions from `data-model.md`;
  no new data model implementation or migration is required.
- Build/browser commands remain future work, not results of task generation.
- No push/merge to `main`, workflow dispatch, DNS change or publication is included.
- No task extension hooks are configured at generation time.

## Current Execution Status

T001-T015 are complete. User confirmed Node v24.22.2, pnpm 11.25.0, typecheck and
production static build success. Browser checks verified updated public pages and metadata,
workflow keys, FAQ, mobile Escape/focus return, inquiry validation, encoded draft, clipboard
copy, stale clearing and downloaded text. T016 found a small existing header overflow at
320 px; app/globals.css now reduces the header gap only at max-width 360 px.
The CSS fix requires a fresh WSL build and browser recheck. T017-T022 remain open pending
remaining cases and final integration evidence. Clipboard-denied and enlarged-text/reduced-motion
cases were not exercised; no live network/storage inspection or HTTP status verification ran.
No deployment occurred.
