<template>
  <a-progress class="nop-progress" :percent="85" :show-info="false" strokeLinecap="square" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MiniArea',
  components: {},
  setup() {},
});
</script>

<style lang="less">
.nop-progress {
  .ant-progress-inner {
    border-radius: 0;
    overflow: inherit;

    .ant-progress-bg {
      position: relative;

      &::before {
        content: '';
        right: 0;
        top: -6px;
        background: #1890ff;
        height: 4px;
        width: 2px;
        position: absolute;
      }

      &::after {
        content: '';
        right: 0;
        bottom: -6px;
        background: #1890ff;
        height: 4px;
        width: 2px;
        position: absolute;
      }
    }
  }
}
</style>
