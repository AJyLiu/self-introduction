import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(), // 这里指定基本URL
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home'
    }
  ]
});

export default router;
