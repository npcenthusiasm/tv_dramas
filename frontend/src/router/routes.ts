import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      // navbar: () => import('layouts/Navbar.vue'),
      default: () => import('layouts/MainLayout.vue')
    },
    children: [
      { path: '', component: () => import('pages/index/Index.vue') },
      { path: 'titles/:id', name: 'drama-id', component: () => import('pages/DramaId.vue') },
      { path: 'figure/:id', name: 'figure-id', component: () => import('pages/figure/Index.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/contact/Index.vue') }
    ]
  },
  {
    path: '/admin',
    components: {
      // navbar: () => import('layouts/Navbar.vue'),
      default: () => import('layouts/AdminLayout.vue')
    },
    children: [
      { path: '', component: () => import('pages/admin/Index.vue') }
      // { path: 'titles/:id', name: 'drama-id', component: () => import('pages/DramaId.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
