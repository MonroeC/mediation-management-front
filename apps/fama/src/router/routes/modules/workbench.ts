import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '工作台',
    },
    name: 'Workbench',
    path: '/workbench',
    children: [
      {
        meta: {
          title: '外呼',
        },
        name: 'OutcallSystem',
        path: '/workbench/outcall-system',
        component: () => import('#/views/outcall-system/index.vue'),
      },
    ],
  },
];

export default routes;
