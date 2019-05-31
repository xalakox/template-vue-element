import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store.js';

// mock
import './mock';

// i18n
import i18n from './i18n';

// element-ui
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', i18n: (key, value) => i18n.t(key, value) });

// echarts
import 'echarts/lib/chart/line.js';
import 'echarts/lib/component/polar.js';
import VueEcharts from 'vue-echarts';
Vue.component('v-chart', VueEcharts);

// filters
import * as filters from './filters';
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

// global
import './styles/index.less';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');