# Research: Projects Page

**Branch**: `001-projects-page` | **Date**: 2026-04-30  
**Phase**: 0 — All NEEDS CLARIFICATION resolved

---

## Decision 1: Project Data Source

**Decision**: Static JavaScript data file (`store/projectsData.js`)  
**Rationale**: Consistent with the existing pattern used by `store/aboutMeTools.js`. No external API dependency, data lives in the repo alongside code, SSR-compatible with zero async complexity.  
**Alternatives considered**:
- Nuxt Content (markdown files) — rejected: adds `@nuxt/content` dependency, overhead not justified for a small project list
- External API/CMS — rejected: adds async complexity and external dependency for data owned by the site author

---

## Decision 2: Image Storage

**Decision**: Local files under `/public/images/projects/<project-slug>/`  
**Rationale**: Simple, no CDN dependency, consistent with how other static assets are served in this repo. Each project gets its own subdirectory (e.g., `/public/images/projects/my-app/thumbnail.jpg`).  
**Structure**:
```
public/images/projects/
└── <project-slug>/
    ├── thumbnail.jpg    ← card thumbnail (shown in grid)
    ├── 1.jpg            ← gallery image 1 (shown on detail page)
    ├── 2.jpg            ← gallery image 2
    └── 3.jpg            ← gallery image 3 (optional)
```
**Alternatives considered**:
- External CDN (Cloudinary, GitHub raw) — rejected: adds external URL management and potential availability risk

---

## Decision 3: Infinite Loading Approach

**Decision**: Native `IntersectionObserver` API, 6 projects per batch  
**Rationale**: No new package dependency. Native browser API has excellent support and is SSR-safe when guarded with `onMounted`. Batch of 6 aligns with the 3-column grid (2 rows per load).  
**Implementation pattern**:
- A sentinel `<div ref="trigger">` is placed after the last project card
- `IntersectionObserver` fires when the sentinel enters the viewport
- The Pinia store advances `currentPage` and exposes `paginatedProjects` as a getter
- Initial state: page 1 → shows projects 0–5; each trigger increments page → shows 0–11, 0–17, etc.
**Alternatives considered**:
- `vue3-infinite-loading` library — rejected: adds dependency, native API is sufficient
- `@vueuse/core` useIntersectionObserver — rejected: not currently installed, native API avoids new dep

---

## Decision 4: i18n for Project Content

**Decision**: Project text stored as i18n keys in `i18n/projects.js`, following the existing `i18n/about.js` pattern  
**Rationale**: Consistent with all other pages in the site. All user-facing project text (title, description, objectives) is bilingual. The data file holds i18n key strings; templates call `$t(key)`.  
**Key naming convention**: `projects.items.<slug>.title`, `projects.items.<slug>.description`, `projects.items.<slug>.objectives`  
**Alternatives considered**:
- English-only project content — rejected: violates constitution Principle II (Bilingual by Default)
- Locale-keyed fields in data object — rejected: mixes data and translation concerns, harder to maintain

---

## Decision 5: Project External Links

**Decision**: Both `liveUrl` and `githubUrl` fields, both optional (null when absent)  
**Rationale**: Covers the full range of projects — some have live deployments, some are open source only, some are both. The detail page renders link buttons conditionally.  
**Alternatives considered**:
- Single URL field — rejected: loses the semantic distinction between live demo and source code
