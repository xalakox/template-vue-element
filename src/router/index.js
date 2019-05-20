import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import demoRouter from './modules/demo.js';

export const constantRoutes = [{
  path: '/',
  redirect: '/demo/permission'
}, {
  path: '/login',
  component: () => import('@/views/login.vue')
}, demoRouter];

export const asyncRoutes = [];

export default new Router({
  routes: constantRoutes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});