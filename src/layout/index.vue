<template>
  <el-container>
    <el-header height="auto">
      <h1 class="logo"><img src="@/assets/logo.png"></h1>
      <nav class="nav">
        <router-link to="/demo/api">api</router-link>
        <router-link to="/demo/chart">chart</router-link>
        <router-link to="/demo/filters">filters</router-link>
        <router-link to="/demo/mock">mock</router-link>
      </nav>
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
  padding: 0;
  .logo {
    background-color: #eee;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      height: 40px;
      width: 40px;
    }
  }
  .nav {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    a {
      color: #0cf;
      text-decoration: none;
      font-size: 14px;
      margin: 0 10px;
      &.router-link-active, &:hover {
        color: #f00;
      }
    }
  }
}
</style>