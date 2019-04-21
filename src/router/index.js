import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout/index.vue';

Vue.use(Router);

export const constantRoutes = [{
  path: '/',
  component: Layout,
  redirect: '/demo',
  children: [{
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
    meta: { title: 'demo' }
  }]
}];

export const asyncRoutes = [];

export default new Router({
  routes: constantRoutes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});