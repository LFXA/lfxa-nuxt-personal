# Data Model: Projects Page

**Branch**: `001-projects-page` | **Date**: 2026-04-30

---

## Entities

### Project

Represents a single portfolio item stored statically in `store/projectsData.js`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | URL-safe slug, unique identifier (e.g., `"my-nuxt-app"`) |
| `titleKey` | `string` | Yes | i18n key → `"projects.items.<id>.title"` |
| `descriptionKey` | `string` | Yes | i18n key → `"projects.items.<id>.description"` |
| `objectivesKey` | `string` | Yes | i18n key → `"projects.items.<id>.objectives"` |
| `category` | `string` | Yes | i18n key → `"projects.categories.<name>"` (e.g., `"projects.categories.web"`) |
| `publishDate` | `string` | Yes | ISO date string `"YYYY-MM-DD"` |
| `img` | `string` | Yes | Thumbnail path, e.g., `"/images/projects/<id>/thumbnail.jpg"` |
| `images` | `string[]` | Yes | Gallery image paths (min 1, max 3). Same `/public` base. |
| `technologies` | `string[]` | Yes | Raw technology names (not i18n keys), e.g., `["Vue.js", "Nuxt"]` |
| `liveUrl` | `string \| null` | No | External live demo URL. `null` if not deployed. |
| `githubUrl` | `string \| null` | No | GitHub repository URL. `null` if private/not open source. |

**Validation rules**:
- `id` must be kebab-case, URL-safe
- At least one of `liveUrl` or `githubUrl` must be non-null per project (a project with neither link has no external reference)
- `images` array must contain at least the thumbnail equivalent (the detail gallery); if empty, the gallery section is hidden

---

### Category

A taxonomy value used for filtering. Categories are not stored as a separate entity — they are derived dynamically from the project list at runtime.

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | i18n key, e.g., `"projects.categories.web"` |
| `label` | `string` | Resolved translation, e.g., `"Web Application"` |

**Rule**: The filter dropdown is populated by collecting unique `category` values from all projects, not from a hardcoded list.

---

### Pagination State (Pinia store)

Tracks which slice of the project list is currently visible.

| Field | Type | Description |
|-------|------|-------------|
| `currentPage` | `number` | Current batch index, starts at `1` |
| `pageSize` | `number` | Fixed at `6` (2 rows × 3 columns) |

**Derived getters**:
- `paginatedProjects`: `projects.slice(0, currentPage * pageSize)` (or filtered subset)
- `hasMore`: `paginatedProjects.length < filteredProjects.length`
- `getProjectById(id)`: find in full list by `id`

---

## i18n Key Structure

`i18n/projects.js` exports two objects: `projectsPagePTBR` and `projectsPageENUS`.

```
projects
├── heading           → Page title ("My Projects" / "Meus Projetos")
├── searchPlaceholder → Search input placeholder
├── allFilter         → "All Projects" / "Todos os Projetos"
├── noResults         → Empty state message
├── liveDemo          → Link button label ("Live Demo" / "Demo ao vivo")
├── sourceCode        → Link button label ("Source Code" / "Código Fonte")
├── categories
│   ├── web           → "Web Application" / "Aplicação Web"
│   ├── mobile        → "Mobile Application" / "Aplicativo Mobile"
│   ├── oss           → "Open Source" / "Código Aberto"
│   └── other         → "Other" / "Outro"
└── items
    └── <project-id>
        ├── title       → Project display name
        ├── description → Full project description (detail page)
        └── objectives  → What the project set out to solve
```

---

## State Transitions

```
Page load
  → store initializes with all projects, currentPage = 1
  → grid shows projects[0..5]

User scrolls to sentinel element
  → IntersectionObserver fires
  → currentPage++
  → grid shows projects[0..(currentPage*6 - 1)]
  → if hasMore = false → observer disconnects

User selects category filter
  → filteredProjects recomputed
  → currentPage resets to 1
  → grid re-renders with filtered[0..5]

User clears filter
  → selectedCategory = null
  → paginatedProjects = all projects[0..(currentPage*6 - 1)]
```
