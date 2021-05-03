<template>
  <echart :option="data" :height="100"></echart>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Echart } from '.';

export default defineComponent({
  name: 'MiniArea',
  components: { Echart },
  setup() {
    const data = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '2021-04-23',
            '2021-04-22',
            '2021-04-21',
            '2021-04-20',
            '2021-04-19',
            '2021-04-18',
            '2021-04-17',
            '2021-04-16',
            '2021-04-15',
            '2021-04-14',
            '2021-04-13',
            '2021-04-12',
            '2021-04-11',
            '2021-04-10'
          ],
          show: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: false
        }
      ],
      series: [
        {
          data: [6, 2, 1, 6, 3, 7, 12, 1, 5, 12, 16, 23, 16, 13],
          type: 'bar'
        }
      ]
    };

    return {
      data
    };
  }
});
</script>
