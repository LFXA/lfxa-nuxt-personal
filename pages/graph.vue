<template>
    <div class="p-4">
      <div ref="networkContainer" class="w-full h-[64vh] text-primary-dark dark:text-ternary-light rounded-2xl" />
    </div>
  </template>
  
  <script setup>
  import { useBlogStore } from "../store/blog";
  import { useVisConfigStore } from "../store/visConfig";
 
  const store = useBlogStore();
  const { t, locale } = useI18n();
  const visConfig = useVisConfigStore();

  const networkContainer = ref(null);
  const { nodes, edges, network, createGraph, manageHighlight, clearHighlights } = useGraph(networkContainer, visConfig);
  
const createGraphData = async () => {
  const fixedNodes = [
    { id: 1, label: t('graph.nodeProgramming'), shape: 'dot', tagPt: 'programacao', tagEn: 'programming', type: 'tag' },
    { id: 2, label: 'Frontend', shape: 'dot', tag: 'frontend', type: 'tag' },
    {
      id: 3,
      label: t('graph.nodePersonal'),
      shape: 'dot',
      tagPt: 'pessoal',
      tagEn: 'personal',
      type: 'tag',
    },
    { id: 4, label: 'Blog', shape: 'dot', type: 'blog' },
    { id: 5, label: t('graph.nodeAI'), shape: 'dot', type: 'tag', tagPt: 'ia',tagEn: 'ai' }];

    nodes.clear();
    edges.clear();
    nodes.add(fixedNodes);
    edges.add([
    { from: 4, to: 2 },
    { from: 4, to: 3 },
    { from: 4, to: 1 },
    { from: 4, to: 5 },
    { from: 1, to: 5 },
    { from: 2, to: 5 },
  ]);

    if(store.postsView === undefined || store.postsView.length == 0){
      await store.fetchPosts();
    }

    const currentLanguage = locale.value.split('-')[0];
    let nodeId = fixedNodes.length +1;
    const filteredPosts = store.postsView.filter(post => post.language === currentLanguage);
    filteredPosts.forEach(post => {
      const tagList = post.tag_list;
      // Find the tag that exists in fixedNodes
      const fixedTagNode = tagList
      .map(tag => {
        return fixedNodes.find(fixedNode =>
          fixedNode.tag === tag || fixedNode.tagPt === tag || fixedNode.tagEn === tag
        );
      })
      .find(Boolean);

    tagList.forEach(tag => {
      const isFixed = (
        fixedTagNode.tag === tag ||
        fixedTagNode.tagPt === tag ||
        fixedTagNode.tagEn === tag
      );

      let existingNode = nodes.get({
  filter: (n) => n.tag === tag || n.tagPt === tag || n.tagEn === tag
})[0];

if (!existingNode) {
  existingNode = {
    id: nodeId,
    label: tag,
    tag: tag,
    type: "tag",
  };
  nodes.add(existingNode);
  nodeId++;
}

    // Check if edge already exists between fixedTagNode and this tag node
    const edgeExists = edges.get({
      filter: (e) =>
        (e.from === fixedTagNode.id && e.to === existingNode.id) ||
        (e.to === fixedTagNode.id && e.from === existingNode.id),
    }).length > 0;

    if (!edgeExists && !isFixed) {
      edges.add({
        from: fixedTagNode.id,
        to: existingNode.id,
      });
    }
    });
    });
    const data = { nodes, edges };

    const options = visConfig.getOptions();

  createGraph(data, options);
  manageHighlight();
}

onMounted(async () => {
  await createGraphData();
  watchEffect(async () => {
    if (network.value && networkContainer.value) {
      await createGraphData();
    }
  });
});

watch(visConfig.colorMode, () => {
  clearHighlights();
});
  </script>
  <style scoped>
  ::v-deep(.vis-network .vis-button) {
    background-color: #0062ff !important;
    color: white !important;
    border-radius: 4px !important;
  }
  </style>