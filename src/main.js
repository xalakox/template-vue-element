import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store.js';

// element-ui
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small' });

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
  render: h => h(App)
}).$mount('#app');