<template>
  <div>
    <div class="header" @click="open = !open">
      <span v-if="open">&#x25B2; Collapse</span>
      <span v-if="!open">&#x25BC; Expand</span>
    </div>
    <!-- Togglable -->
    <slot v-if="open">Default Content</slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsableSection',
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: gray;
  padding: 3px;
  cursor: pointer;
}
</style>
