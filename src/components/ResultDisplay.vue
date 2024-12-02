<template>
  <div v-if="result" class="result-container">
    <h3>Results</h3>
    <p>Shortest Path: {{ result.nodeNames.join(', ') }}</p>
    <p>Total Distance: {{ result.distance }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Add styling here */
.result-container {
  margin-top: 20px;
}
</style>
