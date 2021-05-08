import { RouteRecordRaw } from 'vue-router';
import { DefaultLayout, RouteView } from '@/components/Layout';
import appConfig from './app';

const routes: (Beoop.RouteRecordRaw & RouteRecordRaw)[] = [
  {
    path: '',
    name: 'Home',
    redirect: { name: appConfig.homeName || 'Workplace' },
    component: DefaultLayout,
    children: [
      // Dashboard
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'icon-dashboard'
        },
        redirect: { name: 'Workplace' },
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
      },

      // Form
      {
        path: 'form',
        name: 'Form',
        meta: {
          title: '表单页',
          icon: 'icon-form'
        },
        component: RouteView,
        children: [
          {
            path: 'basic-form',
            name: 'BasicForm',
            meta: {
              title: '基础表单'
            },
            component: () => import('../views/form/BasicForm.vue')
          },
          {
            path: 'step-form',
            name: 'StepForm',
            meta: {
              title: '分步表单'
            },
            component: () => import('../views/form/StepForm.vue')
          },
          {
            path: 'advanced-form',
            name: 'AdvancedForm',
            meta: {
              title: '高级表单'
            },
            component: () => import('../views/form/AdvancedForm.vue')
          }
        ]
      },

      // List
      {
        path: 'list',
        name: 'List',
        meta: {
          title: '列表页',
          icon: 'icon-form'
        },
        component: RouteView,
        children: [
          {
            path: 'table-list',
            name: 'TableList',
            meta: {
              title: '查询表格'
            },
            component: () => import('../views/list/TableList.vue')
          }
        ]
      },

      // Result
      {
        path: 'result',
        name: 'Result',
        meta: {
          title: '结果页',
          icon: 'icon-result'
        },
        component: RouteView,
        children: [
          {
            path: 'success',
            name: 'Success',
            meta: {
              title: '成功页'
            },
            component: () => import('../views/result/Success.vue')
          },
          {
            path: 'fail',
            name: 'Fail',
            meta: {
              title: '失败页'
            },
            component: () => import('../views/result/Fail.vue')
          }
        ]
      },

      // Exception
      {
        path: 'exception',
        name: 'Exception',
        meta: {
          title: '异常页',
          icon: 'icon-Exception'
        },
        component: RouteView,
        children: [
          {
            path: '403',
            name: '403',
            meta: {
              title: '403'
            },
            component: () => import('../views/exception/403.vue')
          },
          {
            path: '404',
            name: '404',
            meta: {
              title: '404'
            },
            component: () => import('../views/exception/404.vue')
          },
          {
            path: '500',
            name: '500',
            meta: {
              title: '500'
            },
            component: () => import('../views/exception/500.vue')
          }
        ]
      },

      {
        path: 'doc',
        name: 'doc',
        meta: {
          title: '文档',
          href: 'https://www.baidu.com',
          icon: 'icon-dashboard'
        }
      } as any
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/Login')
  }
];

export default routes;
