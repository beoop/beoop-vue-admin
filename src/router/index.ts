import { createRouter, createWebHashHistory } from 'vue-router';
import { win } from '@/utils';
import config from '@/config';
import { getToken } from '@/utils/util';
import { permission } from '@/config/permission';

const router = createRouter({
  history: createWebHashHistory(),
  routes: config.routes
});

router.beforeEach((to, from, next) => {
  getToken().then((token) => {
    if (token) {
      if (to.name === permission.visitorPage) {
        next({ name: config.app.homeName });
      } else {
        next();
      }
    } else {
      if (permission.whitelist?.includes(to.name as string)) {
        next();
      } else {
        next({ name: permission.visitorPage });
      }
    }
  });
});

router.afterEach((to, from, failure) => {
  win.title(to).scrollTo(0, 0);

  // permission.whitelist?.includes()
});

export default router;
