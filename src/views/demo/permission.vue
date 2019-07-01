<template>
  <div>
    <el-button @click="logout">重新登录</el-button>
    <!-- TODO -->
    <h1>当前用户身份：{{ roles }}</h1>
    <h1>仅admin可见</h1>
    <h1>仅user可见</h1>
    <h1>admin和user可见</h1>
    <h1>所有用户可见</h1>
  </div>
</template>

<script>
import { getToken, removeToken } from '@/utils/auth.js';
export default {
  data() {
    return {
      roles: ''
    };
  },
  methods: {
    logout() {
      removeToken();
      this.$router.push({ path: '/login' });
    }
  },
  mounted() {
    this.roles = getToken();
  }
};
</script>

<style lang="less" scoped>
h1 {
  padding-top: 20px;
}
</style>