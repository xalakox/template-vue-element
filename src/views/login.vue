<template>
  <el-container>
    <el-input v-model="username" placeholder="用户名">
      <el-button slot="append" @click="login">登录</el-button>
    </el-input>
  </el-container>
</template>

<script>
import { setToken } from '@/utils/auth.js';
export default {
  data() {
    return {
      username: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' || this.username === 'guest') {
        setToken(this.username);
        this.$router.push({ path: '/' });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  background-color: #545c64;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-input {
  width: 300px;
}
</style>