<template>
  <el-container>
    <el-header>
      <nav class="nav">
        <router-link to="/demo/api">api</router-link>
        <router-link to="/demo/chart">chart</router-link>
        <router-link to="/demo/filters">filters</router-link>
        <router-link to="/demo/i18n">i18n</router-link>
        <router-link to="/demo/mock">mock</router-link>
      </nav>
      <img class="logo" src="@/assets/logo.png">
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: block;
    height: 40px;
    width: 40px;
  }
  .nav a {
    color: #0cf;
    text-decoration: none;
    font-size: 16px;
    margin-right: 20px;
    &.router-link-active, &:hover {
      color: #f00;
    }
  }
}
</style>