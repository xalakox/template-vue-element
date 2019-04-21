import Layout from '@/layout/index.vue';

export default {
  path: '/demo',
  component: Layout,
  name: 'demo',
  meta: { title: 'demo' },
  children: [{
    path: '',
    component: () => import('@/views/demo/index.vue'),
    children: [{
      path: 'api',
      component: () => import('@/views/demo/views/api.vue'),
      name: 'demoApi',
      meta: { title: 'demoApi' }
    }, {
      path: 'chart',
      component: () => import('@/views/demo/views/chart.vue'),
      name: 'demoChart',
      meta: { title: 'demoChart' }
    }, {
      path: 'filters',
      component: () => import('@/views/demo/views/filters.vue'),
      name: 'demoFilters',
      meta: { title: 'demoFilters' }
    }]
  }]
};