import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachesDetail.vue';
import CoachesList from './pages/coaches//CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachestRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecived from './pages/requests/RequestRecived.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './NotFound.vue';
import store from './store';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',
          props: true,
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestRecived,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: { requiresUnauth: true },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
