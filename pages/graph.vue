<template>
    <div class="p-4">
      <div ref="networkContainer" class="w-full h-[64vh] text-primary-dark dark:text-ternary-light rounded-2xl" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { DataSet, Network } from 'vis-network/standalone';
  import { useI18n } from 'vue-i18n';
  import { useBlogStore } from "../store/blog";
  
  const store = useBlogStore();
  const colorMode = useColorMode();
  const { t, locale } = useI18n();

  const networkContainer = ref(null);
  const network = ref(null);

  const nodes = new DataSet();
  const edges = new DataSet();
  const getThemeColors = () => {
  const isDark = colorMode.value == 'dark';
  return isDark
    ? {
        background: '#1f2937', // gray-800
        border: '#4b5563', // gray-600
        font: '#e5e7eb', // gray-200
      }
    : {
        background: '#e5e7eb', // gray-200
        border: '#9ca3af', // gray-400
        font: '#1f2937', // gray-800
      };
};
  const manageHighlight = () => {
    const theme = getThemeColors();
    network.value.on("click", function (params) {
      if (params.nodes.length > 0) {
        const clickedNodeId = params.nodes[0];

        // Get connected nodes & edges
        const connectedNodeIds = network.value.getConnectedNodes(clickedNodeId);
        const connectedEdgeIds = network.value.getConnectedEdges(clickedNodeId);

        // Reset all colors
        network.value.body.data.nodes.forEach((node) => {
          network.value.body.data.nodes.update({
            id: node.id,
            color: {
              background: theme.background,
              border: theme.border,
            },
          });
        });

        network.value.body.data.edges.forEach((edge) => {
          network.value.body.data.edges.update({
            id: edge.id,
            color: theme.border,
          });
        });

        // Highlight connected nodes
        connectedNodeIds.forEach((id) => {
          network.value.body.data.nodes.update({
            id,
            color: {
              background: '#3b82f6',
              border: '#3b82f6',
            },
          });
        });

        // Highlight connected edges
        connectedEdgeIds.forEach((id) => {
          network.value.body.data.edges.update({
            id,
            color: '#3b82f6',
          });
        });
      } else {
        // Clicked outside nodes: reset all
        clearHighlights()
      }
    });
    network.value.on("dragStart", function () {
    
    clearHighlights();

    });
    network.value.on('doubleClick', function (params) {
      if (params.nodes.length > 0) {
        const clickedNodeId = params.nodes[0];
        const node = nodes.get(clickedNodeId);
        let link = '';
        if (node.type === 'tag') {
        
        let tagValue = node.tag == undefined ? false : node.tag;

        if (!tagValue && locale.value.startsWith('en') && node.tagEn) {
          tagValue = node.tagEn;
        } else if (!tagValue && locale.value.startsWith('pt') && node.tagPt) {
          tagValue = node.tagPt;
        }

        if (tagValue) {
          link = `https://lfxa.vercel.app/${locale.value}/blog?tag=${tagValue}`;
        }
      } else if (node.type === 'blog') {
        link = `https://lfxa.vercel.app/${locale.value}/blog`;
      }

        if (link) {
          window.open(link, '_target'); // Open in new tab
        }
      }
    });
  };

  const clearHighlights = () => {
    const theme = getThemeColors();
    network.value?.body.data.nodes.forEach((node) => {
      network.value.body.data.nodes.update({
        id: node.id,
        color: {
          background: theme.background,
          border: theme.border,
          hover: {
            background: theme.background,
            border: theme.border,
          },
        },
      });
    });

    network.value?.body.data.edges.forEach((edge) => {
      network.value.body.data.edges.update({
        id: edge.id,
        color: theme.border,
        highlight: theme.border,
        hover:  theme.border,
      });
    });
  };

const createGraph = async () => {
  if (!networkContainer.value) return;

  const theme = getThemeColors();
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
    ];

    nodes.clear();
    edges.clear();
    nodes.add(fixedNodes);
    edges.add([
    { from: 4, to: 2 },
    { from: 4, to: 3 },
    { from: 4, to: 1 },
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

    const options = {
      nodes: {
        shape: 'box',
        shapeProperties: {
        borderRadius:48
      },
      size: 15,
      margin:10,
      font: {
        size: 16,
        color: theme.font,
      },
      color: {
        background: theme.background,
        border: theme.border,
        highlight: {
          background: '#3b82f6',
          border: '#2563eb',
        },
        hover: {
          background: '#93c5fd',
          border: '#3b82f6',
        },
      },
    },
    edges: {
      width: 2,
      color: {
        color: theme.border,
        highlight: '#3b82f6',
      },
    },
    interaction: {
      hover: true,
      navigationButtons: true,
      keyboard: true,
      multiselect: true
    },
    physics: {
      enabled: true,
      stabilization: true,
    },
  };

  if (!network.value) {
    network.value = new Network(networkContainer.value, data, options);
  } else {
    network.value.destroy(); // Clean up properly
    network.value = new Network(networkContainer.value, data, options); // Recreate
  }
  manageHighlight()
}

onMounted(async () => {
  await createGraph();
  watchEffect(async () => {
    if (network.value && networkContainer.value) {
      await createGraph();
    }
  });
});

watch(colorMode, () => {
  clearHighlights();
});
  </script>
  