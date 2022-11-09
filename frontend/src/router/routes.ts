import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') }
      { path: '', component: () => import('pages/index/Index.vue') },
      { path: 'titles/:id', name: 'drama-id', component: () => import('pages/dramaId/DramaId.vue') },
      { path: 'figure/:id', name: 'figure-id', component: () => import('pages/figure/Index.vue') },
      { path: 'dramas', name: 'dramas', component: () => import('pages/dramas/Index.vue') },

      // { path: 'contact', name: 'contact', component: () => import('pages/contact/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
