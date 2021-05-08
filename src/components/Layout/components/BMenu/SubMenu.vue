<template>
  <a-sub-menu v-if="'children' in item">
    <template #title>
      <icon-font v-if="item.meta.icon" :type="item.meta.icon" />
      <span>{{ t(`route.${item.name}`, item.meta.title) }}</span>
    </template>
    <AsideMenuItem v-for="children in item.children" :key="children.name" :item="children" />
  </a-sub-menu>

  <a-menu-item v-else :title="item.meta.title">
    <icon-font v-if="item.meta.icon" :type="item.meta.icon" />
    <span>{{ t(`route.${item.name}`, item.meta.title) }}</span>
  </a-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AsideMenuItem',
  props: {
    item: {
      type: Object
    }
  },
  setup() {
    const { t } = useI18n();

    return { t };
  }
});
</script>
