<template>
  <div class="chart-panel" ref="root" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, onBeforeUnmount } from 'vue';
import echarts from '../../utils/echarts';
import { refResizeObserver, unResizeObserver } from '@/utils/resize';

export default defineComponent({
  props: {
    option: {
      type: Object as PropType<echarts.EChartsCoreOption>,
      required: true
    },
    height: {
      type: Number,
      default: 300
    }
  },
  setup({ option, height }) {
    const root = ref<HTMLElement | null>(null);
    const defaultOption: echarts.EChartsCoreOption = Object.assign({}, option);
    let chart: echarts.ECharts;

    onMounted(() => {
      if (root.value instanceof HTMLElement) {
        chart = echarts.init(root.value, 'walden', {
          renderer: 'svg',
          height
        });
        chart.setOption(defaultOption);

        refResizeObserver(root.value, () => chart.resize());
      }
    });

    onBeforeUnmount(() => {
      if (root.value) {
        unResizeObserver(root.value);
      }
    });

    return {
      root
    };
  }
});
</script>

<style lang="less">
.chart-panel {
  width: 100%;
  overflow: hidden;
}
</style>
