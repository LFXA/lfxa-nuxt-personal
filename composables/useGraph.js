// composables/useGraph.js
import { ref } from 'vue';
import { DataSet, Network } from 'vis-network/standalone';
const { locale } = useI18n();
export const useGraph = (networkContainer, visConfig) => {
  const nodes = new DataSet();
  const edges = new DataSet();
  const network = ref(null);

  const createGraph = (data, options) => {
    if (!networkContainer.value) return;
    
    // Create or update the graph
    if (network.value) {
      network.value.destroy();
    }
   
      network.value = new Network(networkContainer.value, data, options);
  };

  const clearHighlights = () => {
    const theme = visConfig.getThemeColors();
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
        hover: theme.border,
      });
    });
  };

  const manageHighlight = () => {
    const theme = visConfig.getThemeColors();
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
              background: theme.highlight,
              border: '#3b82f6',
            },
          });
        });

        // Highlight connected edges
        connectedEdgeIds.forEach((id) => {
          network.value.body.data.edges.update({
            id,
            color: theme.highlight,
          });
        });
      } else {
        // Clicked outside nodes: reset all
        clearHighlights();
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
          let tagValue = node.tag === undefined ? false : node.tag;

          if (!tagValue && node.tagEn) {
            tagValue = node.tagEn;
          } else if (!tagValue && node.tagPt) {
            tagValue = node.tagPt;
          }

          if (tagValue) {
            link = `https://lfxa.vercel.app/${locale.value}/blog?tag=${tagValue}`;
          }
        } else if (node.type === 'blog') {
          link = `https://lfxa.vercel.app/${locale.value}/blog`;
        }

        if (link) {
          window.open(link, '_target');
        }
      }
    });
  };

  return {
    nodes,
    edges,
    network,
    createGraph,
    clearHighlights,
    manageHighlight,
  };
};
