<template>
  <el-container>
    <el-aside width="150px">
      <el-menu background-color="#545c64" text-color="#fff" active-text-color="#0cf" :default-active="activeIndex" router>
        <el-menu-item v-for="item in menus" :key="item" :index="`/demo/${item}`">{{ item }}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: this.$store.getters.permission_routes,
      activeIndex: this.$route.path
    };
  },
  watch: {
    '$route'(to) {
      this.activeIndex = to.path;
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #545c64;
}
.el-menu {
  border: 0;
}
</style>