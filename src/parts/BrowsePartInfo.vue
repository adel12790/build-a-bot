<template>
  <div>
    <!-- <h2>Arms</h2>The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.-->
    <div v-for="(part, idx) in partInfo" :key="idx">
      <h4>{{ part.title }}</h4>
      <div>{{ part.description }}</div>
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'BrowsePartInfo',
  props: {
    partName: { type: String, default: '' },
  },
  computed: {
    partInfo() {
      const { partName } = this;
      console.log(partName);
      return parts[partName];
    },
  },
};
</script>
