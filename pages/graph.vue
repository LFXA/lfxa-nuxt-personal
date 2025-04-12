<template>
    <div class="p-4">
      <div ref="networkContainer" class="w-full h-[600px] text-primary-dark dark:text-ternary-light rounded-2xl" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { DataSet, Network } from 'vis-network/standalone';
  
  const networkContainer = ref(null);
  
  onMounted(() => {
    const nodes = new DataSet([
      { id: 1, label: 'Vue', shape: "dot", color: {
            color:'#fff',
            background: '#e5e7eb',  
            highlight: {
            background: '#3b82f6',      // blue-500
            border: '#2563eb',          // blue-600
            },
            hover: {
            background: '#93c5fd',      // blue-300
            border: '#3b82f6',
            }
        }},
      { id: 2, label: 'React' },
      { id: 3, label: 'Svelte' },
      { id: 4, label: 'Angular' },
      { id: 5, label: 'Solid' },
    ]);
  
    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 1, to: 5 },
    ]);
  
    const data = {
      nodes,
      edges,
    };
  
    const options = {
      nodes: {
        shape: 'box',
        color: {
            background: '#e5e7eb', 
            highlight: {
            background: '#3b82f6',      // blue-500
            border: '#2563eb',          // blue-600
            },
            hover: {
            background: '#93c5fd',      // blue-300
            border: '#3b82f6',
            }
        },
        size: 20,
        font: {
          size: 16,
        },
        borderWidth: 2,
        borderRadius: 96,
      },
      edges: {
        width: 2,
        color: {
          color: '#ccc',
          highlight: '#2186F3',
        },
      },
      interaction: {
        hover: true,
        navigationButtons: true,
        keyboard: true,
      },
      physics: {
        enabled: true,
        stabilization: false,
      },
    };
  
    new Network(networkContainer.value, data, options);
  });
  </script>
  
  <style scoped>
  /* Optional styles for smoother look */
  </style>