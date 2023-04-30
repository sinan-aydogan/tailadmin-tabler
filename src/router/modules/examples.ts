export default [
  {
    path: '/empty-page',
    component: () => import('@/layouts/HorizontalLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/examples/EmptyPage.vue')
      }
    ]
  }
]
