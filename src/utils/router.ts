import { RouteRecordRaw } from 'vue-router';

export function getMenuByRouter(routes: RouteConfig[], name = '', level: number = 2): RouteConfig[] {
  let res: RouteConfig[] = [];
  routes.forEach((item) => {
    if (name) {
      if (item.name === name && item.children) {
        res = getMenuByRouter(item.children, '');
      }
    } else {
      const obj: RouteConfig = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      };

      if (item.children) {
        obj.children = getMenuByRouter(item.children, '', level - 1);
      }

      res.push(obj);
    }
  });
  return res;
}
