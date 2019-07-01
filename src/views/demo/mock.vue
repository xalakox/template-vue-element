<template>
  <div>
    <el-button @click="getMockData1">直接生成</el-button>
    <el-button @click="getMockData2">拦截请求</el-button>
    <pre>{{ results }}</pre>
  </div>
</template>

<script>
import { demoMock1, demoMock2 } from '@/api/demo.js';
export default {
  data() {
    return {
      results: {}
    };
  },
  methods: {
    getMockData1() {
      demoMock1().then(response => this.results = response);
    },
    getMockData2() {
      demoMock2().then(response => this.results = response.data);
    }
  }
};
</script>

<style lang="less" scoped>
pre {
  padding-top: 20px;
}
</style>