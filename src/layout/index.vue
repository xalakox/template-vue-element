<template>
  <el-container>
    <el-header>
      <the-logo></the-logo>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
import TheLogo from './components/the-logo.vue';
export default {
  name: 'Layout',
  components: {
    TheLogo
  }
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header, .el-footer {
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>