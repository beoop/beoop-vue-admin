<template>
  <a-menu mode="horizontal" :selectedKeys="[route.name]" @click="onSelect">
    <sub-menu v-for="item in menuList" :key="item.name" :item="item" />
  </a-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import SubMenu from './SubMenu.vue';

export default defineComponent({
  components: {
    SubMenu
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const onSelect = ({ key }: any) => {
      if (router.hasRoute(key)) {
        router.push({
          name: key
        });
      }
    };

    return {
      route,
      menuList: store.getters.menuList,
      onSelect
    };
  }
});
</script>
