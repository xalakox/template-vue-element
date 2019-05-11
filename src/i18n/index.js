import Vue from 'vue';
import VueI18n from 'vue-i18n';

import elementEnLocale from 'element-ui/lib/locale/lang/en.js';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN.js';
import enLocale from './lang/en.js';
import zhLocale from './lang/zh.js';

Vue.use(VueI18n);

const messages = {
  en: {
    ...elementEnLocale,
    ...enLocale
  },
  zh: {
    ...elementZhLocale,
    ...zhLocale
  }
};

function getLanguage() {
  const language = window.localStorage.getItem('language');
  return language ? language : 'zh';
}

export default new VueI18n({
  locale: getLanguage(),
  messages
});