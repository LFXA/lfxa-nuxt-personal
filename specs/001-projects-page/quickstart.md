# Quickstart: Projects Page

**Branch**: `001-projects-page`

## Dev setup

```bash
yarn install
yarn dev
```

## Implementation order

Follow the phases in [plan.md](plan.md) sequentially — each phase has hard dependencies on the previous:

```
Phase A (data layer) → Phase B (routing) → Phase C (listing + infinite scroll) → Phase D (assets)
```

## Key file locations

| Purpose | File |
|---------|------|
| Static project data | `store/projectsData.js` (create) |
| Pinia store | `store/projects.js` (create) |
| i18n translations | `i18n/projects.js` (create) |
| Listing page | `pages/projects/index.vue` (update) |
| Detail page | `pages/projects/[id].vue` (create, replaces `_id.vue`) |
| Card component | `components/projects/ProjectCard.vue` (create) |
| Grid component | `components/projects/ProjectsGrid.vue` (update) |
| Filter component | `components/projects/ProjectsFilter.vue` (update) |
| Store tests | `tests/store/projects.spec.js` (create) |
| Project images | `public/images/projects/<slug>/` |

## i18n key pattern

```js
// In data file:
titleKey: "projects.items.my-project.title"

// In template:
$t(project.titleKey)

// In i18n/projects.js:
export const projectsPageENUS = {
  items: { "my-project": { title: "My Project Name" } }
}
```

## Infinite scroll pattern

```vue
<div ref="trigger" />  <!-- sentinel after last card -->
```
```js
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && store.hasMore) store.loadMore()
    if (!store.hasMore) observer.disconnect()
  })
  observer.observe(trigger.value)
})
```

## Locale routes

The `projects` page already has PT-BR route configured in `nuxt.config.ts`:
```
/projects     → en-US
/projetos     → pt-BR
/projects/[id]  → en-US detail
/projetos/[id]  → pt-BR detail
```
