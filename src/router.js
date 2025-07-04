import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: null,
    },
    {
      path: '/coached/:id',
      component: null,
      children: {
        path: '/contact/',
        component: null,
      },
    },
    {
      path: '/register',
      component: null,
    },
    {
      path: '/:notFound(.*)',
      component: null,
    },
  ],
});

export default router;
