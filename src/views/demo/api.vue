<template>
  <pre>{{ results }}</pre>
</template>

<script>
import { demoApi } from '@/api/demo.js';
export default {
  data() {
    return {
      results: []
    };
  },
  mounted() {
    demoApi(2).then(response => {
      window.console.log(response);
      this.results = response.data.results;
    });
  }
};
</script>