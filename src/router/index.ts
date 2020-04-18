import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Index from '@/views/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/:user',
    name: 'user',
    component: () => import('@/views/_user.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
