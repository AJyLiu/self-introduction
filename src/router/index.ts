import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(), // 这里指定基本URL
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/main'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/main/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/index'
    }
  ]
});

export default router;
