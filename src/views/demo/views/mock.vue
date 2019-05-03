<template>
  <pre>{{ results }}</pre>
</template>

<script>
import { demoMock } from '@/api/demo.js';
export default {
  name: 'DemoMock',
  data() {
    return {
      results: []
    };
  },
  mounted() {
    demoMock().then(response => {
      window.console.log(response);
      this.results = response;
    });
  }
};
</script>