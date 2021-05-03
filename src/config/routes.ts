import { RouteRecordRaw } from 'vue-router';
import { DefaultLayout, RouteView } from '@/components/Layout';
import appConfig from './app';

const routes: Array<RouteConfig & RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    redirect: { name: appConfig.homeName || 'Analysis' },
    component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'icon-dashboard'
        },
        component: RouteView,
        children: [
          {
            path: 'analysis',
            name: 'Analysis',
            meta: {
              title: '分析页'
            },
            component: () => import('../views/dashboard/Analysis.vue')
          },
          {
            path: 'monitor',
            name: 'Monitor',
            meta: {
              title: '监控页'
            },
            component: () => import('../views/dashboard/Monitor.vue')
          },
          {
            path: 'workplace',
            name: 'Workplace',
            meta: {
              title: '工作台'
            },
            component: () => import('../views/dashboard/Workplace.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/Login')
  }
];

export default routes;
