<template>
  <section>
    <el-button @click="changeLanguage('en')">English</el-button>
    <el-button @click="changeLanguage('zh')">中文</el-button>
    <h1>{{ $t('demo.hello') }}</h1>
  </section>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      window.localStorage.setItem('language', lang);
    }
  },
  mounted() {
    window.console.log(this.$i18n.getLocaleMessage('zh').el);
    window.console.log(this.$i18n.getLocaleMessage('zh').demo);
  }
};
</script>

<style lang="less" scoped>
h1 {
  padding-top: 20px;
}
</style>