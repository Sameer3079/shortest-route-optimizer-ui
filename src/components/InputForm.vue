<template>
  <div class="form-container">
    <h2>Shortest Path Optimizer</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="fromNode">From Node:</label>
        <input v-model="fromNode" id="fromNode" type="text" required />
      </div>

      <div>
        <label for="toNode">To Node:</label>
        <input v-model="toNode" id="toNode" type="text" required />
      </div>

      <div>
        <label for="graphData">Graph Nodes:</label>
        <textarea v-model="graphData" id="graphData" rows="5" required></textarea>
      </div>

      <button type="submit">Calculate</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { findShortestPath } from '../services/apiService';

export default defineComponent({
  emits: ['result'],
  data() {
    return {
      fromNode: '',
      toNode: '',
      graphData: '',
      error: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const graphNodes = JSON.parse(this.graphData);
        const result = await findShortestPath(this.fromNode, this.toNode, graphNodes);
        this.$emit('result', result);
        this.error = '';
      } catch (err) {
        this.error = err;
      }
    },
  },
});
</script>

<style scoped>
/* Add styling here */
.error {
  color: red;
}
</style>
