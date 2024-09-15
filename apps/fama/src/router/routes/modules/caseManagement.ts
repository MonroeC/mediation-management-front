import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      hideChildrenInMenu: true,
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '案件管理',
    },
    name: 'CaseManagement',
    path: '/case-management',
    redirect: '/case-management/list',
    children: [
      {
        meta: {
          title: '案件管理',
        },
        name: 'list',
        path: 'list',
        component: () => import('#/views/case-management/index.vue'),
      },
    ],
  },
];

export default routes;
