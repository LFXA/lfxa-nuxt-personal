// store/visConfigStore.js
import { reactive } from 'vue';

export const useVisConfigStore = () => {
  const colorMode = useColorMode();

  const state = reactive({
    getThemeColors() {
      const isDark = colorMode.value === 'dark';
      return isDark
        ? {
            background: '#1f2937',
            border: '#4b5563',
            font: '#e5e7eb',
            highlight: '#4fd1c5'
          }
        : {
            background: '#e5e7eb',
            border: '#9ca3af',
            font: '#1f2937',
            highlight: '#007acc'
          };
    },

    getOptions() {
      const theme = this.getThemeColors();
      return {
        nodes: {
          shape: 'box',
          shapeProperties: {
            borderRadius: 48,
          },
          size: 15,
          margin: 10,
          font: {
            size: 16,
            color: theme.font,
          },
          color: {
            background: theme.background,
            border: theme.border,
            highlight: {
              background: theme.highlight,
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
            highlight: theme.highlight,
          },
        },
        interaction: {
          hover: true,
          navigationButtons: true,
          keyboard: true,
          multiselect: true,
        },
        physics: {
          enabled: true,
          stabilization: true,
        },
      };
    },
  });

  return state;
};
