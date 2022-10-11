
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('src/pages/Index.vue') },
      { path: 'sujets', name: 'sujets', component: () => import('src/pages/Sujets.vue') },
      { path: 'sujets/detail', name: 'sujetDetail', component: () => import('src/pages/SujetDetail.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
