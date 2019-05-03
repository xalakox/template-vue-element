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
    path: 'filters',
    component: () => import('@/views/demo/filters.vue')
  }, {
    path: 'mock',
    component: () => import('@/views/demo/mock.vue')
  }]
};