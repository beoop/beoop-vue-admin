<template>
  <a-sub-menu v-if="'children' in item">
    <template #title>
      <icon-font v-if="item.meta.icon" :type="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
    </template>
    <AsideMenuItem v-for="children in item.children" :key="children.name" :item="children" />
  </a-sub-menu>

  <a-menu-item v-else>
    <icon-font v-if="item.meta.icon" :type="item.meta.icon" />
    {{ item.meta.title }}
  </a-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2503424_9wraio8kfnr.js'
});

export default defineComponent({
  components: { IconFont },
  name: 'AsideMenuItem',
  props: {
    item: {
      type: Object
    }
  },
  setup() {}
});
</script>
