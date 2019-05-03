<template>
  <section>
    <nav class="nav">
      <router-link to="/demo/api">api</router-link>
      <router-link to="/demo/chart">chart</router-link>
      <router-link to="/demo/filters">filters</router-link>
      <router-link to="/demo/mock">mock</router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'Demo',
  mounted() {
    window.console.log('Demo');
  }
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
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
</style>