<template>
  <el-dialog :visible.sync="dialogVisible" title="弹窗" width="300px">
    <el-input v-model="input"></el-input>
    <div slot="footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button @click="hide" type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      input: ''
    };
  },
  methods: {
    show(params) {
      this.dialogVisible = true;
      window.console.log(params);
    },
    hide() {
      this.dialogVisible = false;
      this.$emit('confirm', { b: this.input });
    }
  },
  created() {
    window.console.log('created');
  },
  mounted() {
    window.console.log('mounted');
  },
  updated() {
    window.console.log('updated');
  },
  destroyed() {
    window.console.log('destroyed');
  }
};
</script>