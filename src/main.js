import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store';

// Element
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'small' });

// global
import './styles/index.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');