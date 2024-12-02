<template>
  <div id="app">
    <InputForm @result="handleResult" />
    <ResultDisplay v-if="result" :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputForm from './components/InputForm.vue';
import ResultDisplay from './components/ResultDisplay.vue';

export default defineComponent({
  components: { InputForm, ResultDisplay },
  data() {
    return {
      result: null,
    };
  },
  methods: {
    handleResult(result: any) {
      this.result = result;
    },
  },
});
</script>

<style>
/* Add global styles here */
</style>
