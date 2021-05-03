<template>
  <div class="b-header">
    <a-layout-header>
      <slot />
    </a-layout-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {}
});
</script>

<style lang="less">
.b-header {
  .ant-layout-header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
  }
}
</style>
