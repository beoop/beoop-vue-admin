import { defineComponent, ref } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, RouteRecordNormalized } from 'vue-router';
import config from '@/config';

export default defineComponent({
  setup() {
    const bread = ref<RouteRecordNormalized[]>([]);

    const updataBreadCrumb = (route: RouteLocationNormalized) => {
      const matched = route.matched;
      console.log(matched);

      console.log(matched[matched.length - 1].name, config.app.homeName);

      if (matched[matched.length - 1].name === config.app.homeName) {
        bread.value = [matched[matched.length - 1]];
        return;
      }
      bread.value = [];
      matched.forEach((item) => {
        if (item.meta && item.meta.title) {
          const obj: RouteRecordNormalized = item;
          bread.value.push(obj);
        }
      });
    };

    updataBreadCrumb(useRoute());

    onBeforeRouteUpdate((to: RouteLocationNormalized, from: RouteLocationNormalized) => updataBreadCrumb(to));

    return () => (
      <a-breadcrumb style="flex: 1 1 auto;">
        {bread.value.map((item) => (
          <a-breadcrumb-item>
            <router-link to={{ name: item.name }}>
              {item.meta.icon && <icon-font type={item.meta.icon} style="margin-right:6px" />}
              {item.meta.title}
            </router-link>
          </a-breadcrumb-item>
        ))}
      </a-breadcrumb>
    );
  }
});
