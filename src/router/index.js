import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout/index.vue';

import demoRouter from './modules/demo.js';

export const constantRoutes = [{
  path: '',
  component: Layout,
  redirect: '/demo'
}, demoRouter];

export const asyncRoutes = [];

export default new Router({
  routes: constantRoutes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});