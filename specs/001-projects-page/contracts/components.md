# Component Contracts: Projects Page

**Branch**: `001-projects-page` | **Date**: 2026-04-30

---

## ProjectsGrid

**File**: `components/projects/ProjectsGrid.vue`  
**Purpose**: Renders the filterable, infinite-scroll project listing.

### Props
None — reads directly from the projects Pinia store.

### Emits
None.

### Behaviour
- On mount: initialises `IntersectionObserver` targeting the sentinel `div#infinite-trigger`
- Observer fires `loadMore()` when sentinel is visible and `hasMore` is `true`
- Observer disconnects when `hasMore` becomes `false`
- Resetting the category filter resets pagination to page 1
- Must handle SSR: observer setup wrapped in `onMounted`

---

## ProjectCard

**File**: `components/projects/ProjectCard.vue`  
**Purpose**: Displays a single project summary for the grid listing.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `project` | `Project` | Yes | Full project object from the store |

### Emits
None — uses `NuxtLink` internally for navigation.

### Behaviour
- Renders thumbnail, translated title, translated category label
- Entire card is a `NuxtLink` to `/projects/<id>`
- Shows skeleton state when `project` is undefined (handled by parent)
- Must support both light and dark themes

---

## ProjectsFilter

**File**: `components/projects/ProjectsFilter.vue`  
**Purpose**: Category dropdown for filtering the project grid.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `categories` | `string[]` | Yes | List of i18n category keys derived from project data |
| `modelValue` | `string \| null` | Yes | Currently selected category key (v-model) |

### Emits

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string \| null` | Emitted when user changes selection; `null` = "All" |

### Behaviour
- First option is always "All Projects" with value `null`
- Options are rendered using `$t(categoryKey)` for bilingual labels
- Categories derived dynamically from project list, not hardcoded

---

## ProjectDetail (page-level component)

**File**: `pages/projects/[id].vue`  
**Purpose**: Full project detail view.

### Route param
`id` — matches `project.id` slug

### Data requirements (from store)
- `getProjectById(id)` — returns full Project object or `undefined`
- If `undefined`: renders "not found" state, no navigation error

### Rendered sections
1. Title + publish date + category tag
2. Image gallery (1–3 images in responsive grid)
3. Description (translated)
4. Objectives (translated)
5. Technologies list (raw strings, comma-separated)
6. External links: "Live Demo" button (if `liveUrl`), "Source Code" button (if `githubUrl`)
7. Related projects (existing `ProjectRelatedProjects` component)

### Behaviour
- All translated strings via `$t(project.titleKey)` etc.
- External links open in `target="_blank"` with `rel="noopener noreferrer"`
- Gallery hidden if `images` array is empty
