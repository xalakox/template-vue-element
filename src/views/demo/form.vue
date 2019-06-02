<template>
  <el-form :model="form" :rules="rules" @validate="check" ref="form">
    <el-form-item prop="a">
      <el-input v-model="form.a" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="b">
      <el-input v-model="form.b" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">提交</el-button>
      <el-button :disabled="invalid">提交</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        a: '',
        b: ''
      },
      rules: {
        a: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        b: [
          { required: true, message: '必填', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      },
      invalid: true
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.console.log('submit');
        }
      });
    },
    check(a, b, c) {
      // TODO
      window.console.log(a);
      window.console.log(b);
      window.console.log(c);
    },
    reset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.el-form {
  width: 300px;
}
.el-form-item {
  margin-bottom: 20px;
  /deep/ .el-form-item__error {
    width: 200px;
    line-height: 32px;
    padding: 0 0 0 10px;
    top: 0;
    left: 100%;
  }
}
</style>