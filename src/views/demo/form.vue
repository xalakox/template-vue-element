<template>
  <el-form :model="form" :rules="rules" @validate="check" ref="form" label-width="80px">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPassword">
      <el-input v-model="form.checkPassword"></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-input v-model="form.tag"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">提交</el-button>
      <el-button :disabled="invalid">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    const validatePassword1 = (rule, value, callback) => {
      if (this.form.checkPassword !== '') {
        this.$refs.form.validateField('checkPassword');
      }
      callback();
    };
    const validatePassword2 = (rule, value, callback) => {
      if (this.form.password !== '') {
        if (value !== this.form.password) {
          callback(new Error('密码不一致'));
        } else {
          callback();
        }
      }
      callback();
    };
    return {
      form: {
        phone: '',
        password: '',
        checkPassword: '',
        tag: ''
      },
      rules: {
        phone: [
          { required: true, message: '必填', trigger: ['blur', 'change'] },
          { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '格式错误', trigger: 'change' }
        ],
        password: [
          { required: true, message: '必填', trigger: ['blur', 'change'] },
          { validator: validatePassword1, trigger: 'change' }
        ],
        checkPassword: [
          { required: true, message: '必填', trigger: ['blur', 'change'] },
          { validator: validatePassword2, trigger: ['blur', 'change'] }
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
    check() {
      this.invalid = this.$refs.form.fields.some(e => e.validateState !== 'success');
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