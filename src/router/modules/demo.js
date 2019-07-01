import Layout from '@/layout';

export default {
  path: '/demo',
  component: Layout,
  children: [{
    path: 'api',
    component: () => import('@/views/demo/api.vue')
  }, {
    path: 'chart',
    component: () => import('@/views/demo/chart.vue')
  }, {
    path: 'dialog',
    component: () => import('@/views/demo/dialog.vue')
  }, {
    path: 'excel',
    component: () => import('@/views/demo/excel.vue')
  }, {
    path: 'filters',
    component: () => import('@/views/demo/filters.vue')
  }, {
    path: 'form',
    component: () => import('@/views/demo/form.vue')
  }, {
    path: 'i18n',
    component: () => import('@/views/demo/i18n.vue')
  }, {
    path: 'mock',
    component: () => import('@/views/demo/mock.vue')
  }]
};