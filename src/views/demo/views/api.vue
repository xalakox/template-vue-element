<template>
  <pre>{{ results }}</pre>
</template>

<script>
import { demo } from '@/api/demo.js';
export default {
  name: 'DemoApi',
  data() {
    return {
      results: []
    };
  },
  mounted() {
    demo(2).then(response => {
      window.console.log(response);
      this.results = response.data.results;
    });
  }
};
</script>