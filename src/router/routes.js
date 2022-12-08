
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('src/pages/Index.vue') },
      { path: 'search', name: 'search', component: () => import('src/pages/Search.vue') },
      { path: 'sujets/detail', name: 'documentDetail', component: () => import('src/pages/DocumentDetail.vue') },
      { path: 'ajouter-document', name: 'addDocument', component: () => import('src/pages/AddDocument.vue') },
      { path: 'merci', name: 'thankYou', component: () => import('src/pages/ThankYou.vue') },
      { path: 'à-propos', name: 'aboutWebsite', component: () => import('src/pages/footer/AboutWebsite.vue') },
      { path: 'contact', name: 'contactUs', component: () => import('src/pages/footer/Contact.vue') },
      { path: 'conditions-dutilisation', name: 'termsOfUse', component: () => import('src/pages/footer/TermsOfUse.vue') },
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
