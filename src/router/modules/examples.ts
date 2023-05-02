import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
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
