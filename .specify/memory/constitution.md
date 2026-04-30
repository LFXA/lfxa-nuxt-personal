# LFXA Personal Constitution

## Core Principles

### I. Personal Brand Integrity
The site represents a single person. All content, copy, and visual decisions must reflect a consistent personal identity. No feature ships if it contradicts or dilutes that identity.

### II. Bilingual by Default
Every user-facing string must be available in both supported languages (English and Brazilian Portuguese). Hardcoded display text in components is never acceptable. Adding a new locale requires parity across all existing content.

### III. Theme Consistency
The app supports light and dark modes with dark as the default. Any new UI surface must fully support both themes using the established design tokens — no component ships with only one theme working.

### IV. Content Separation
User-facing content (text, translations, data) is always separated from presentation logic. Components render; they do not own content.

### V. Minimal Footprint
Add only what is necessary. No new dependency, page, or feature is introduced without a clear user-facing purpose. Prefer extending existing patterns over introducing new ones.

## Quality Standards

- All user interactions must be accessible (keyboard navigable, sufficient color contrast).
- Pages must be responsive across mobile, tablet, and desktop.
- Analytics consent must be obtained before any tracking fires.
- New logic units (data fetching, transformations, shared behavior) require at least one automated test.
- Code must pass linting before merging.

## Development Workflow

- Changes to user-facing strings require updates in all supported locales simultaneously.
- New pages with locale-specific routes must have routes defined for every supported locale.
- Deployment targets production via CI — no manual deploys.

## Governance

This constitution supersedes all other guidance. Any deviation requires explicit approval before implementation. Amendments must be reflected here with an updated version and date.

**Version**: 1.0.0 | **Ratified**: 2026-04-30 | **Last Amended**: 2026-04-30
