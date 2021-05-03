<template>
  <div>
    <a-row :gutter="24">
      <a-col :xs="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <echart-card title="总销售额" total="￥126,560">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined />
            </a-tooltip>
          </template>
          <div>
            <trend flag="up" style="margin-right: 16px">
              <template #term>周同比</template>
              12%
            </trend>
            <trend flag="down">
              <template #term>日同比</template>
              11%
            </trend>
          </div>

          <template #footer> 日均销售额<span style="margin-left: 8px">￥ 234.56</span> </template>
        </echart-card>
      </a-col>

      <a-col :xs="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <echart-card title="访问量" total="8846">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined />
            </a-tooltip>
          </template>
          <div>
            <mini-area />
          </div>
          <template #footer>
            日访问量<span> {{ '1234' }}</span>
          </template>
        </echart-card>
      </a-col>

      <a-col :xs="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <echart-card title="支付笔数" :total="6560">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined />
            </a-tooltip>
          </template>
          <div>
            <mini-bar />
          </div>
          <template #footer> 转化率 <span>60%</span> </template>
        </echart-card>
      </a-col>

      <a-col :xs="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
        <echart-card title="运营活动效果" total="78%">
          <template #action>
            <a-tooltip title="指标说明">
              <InfoCircleOutlined />
            </a-tooltip>
          </template>
          <div>
            <mini-progress />
          </div>
          <template #footer>
            <trend flag="down" style="margin-right: 16px">
              <template #term>同周比</template>
              12%
            </trend>
            <trend flag="up">
              <template #term>日环比</template>
              80%
            </trend>
          </template>
        </echart-card>
      </a-col>
    </a-row>

    <a-card :tab-list="tabListNoTitle" :style="{ marginBottom: '24px' }">
      <a-row :gutter="32">
        <a-col :xs="24" :md="14" :xl="16" :style="{ marginBottom: '24px' }">
          <div>
            <h4 :style="{ marginBottom: '20px' }">销售趋势</h4>
            <Echart :option="option" :height="270" />
          </div>
        </a-col>
        <a-col :xs="24" :md="10" :xl="8">
          <div>
            <h4 :style="{ marginBottom: '20px' }">门店销售额排名</h4>
            <a-list :data-source="data" size="small" class="anliysis-list" :split="false">
              <template #renderItem="{ item, index }">
                <a-list-item>
                  <template #actions> 323,234 </template>
                  <div>
                    <a-avatar
                      :size="20"
                      :style="{
                        backgroundColor: index <= 3 ? '#314659' : '#fafafa',
                        color: index <= 3 ? '#fafafa' : '#314659',
                        marginRight: '14px',
                        fontSize: '14px',
                        verticalAlign: 'middle'
                      }"
                    >
                      {{ index + 1 }}
                    </a-avatar>
                    {{ item }}
                  </div>
                </a-list-item>
              </template>
            </a-list>
          </div>
        </a-col>
      </a-row>
      <template #tabBarExtraContent>
        <a href="#">More</a>
      </template>
    </a-card>

    <a-row :gutter="24">
      <a-col :xs="24" :md="12" :xl="12" :style="{ marginBottom: '24px' }">
        <a-card title="线上热门搜索"></a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="12" :style="{ marginBottom: '24px' }">
        <a-card title="销售额类别占比"></a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { Echart, EchartCard, Trend, MiniArea, MiniBar, MiniProgress } from '@/components';

export default defineComponent({
  components: {
    Echart,
    Trend,
    EchartCard,
    InfoCircleOutlined,
    MiniArea,
    MiniBar,
    MiniProgress
  },
  setup() {
    const tabListNoTitle = [
      {
        key: 'article',
        tab: '销售额'
      },
      {
        key: 'app',
        tab: '访问量'
      }
    ];

    const data: string[] = [
      '工专路 0 号店',
      '工专路 1 号店',
      '工专路 2 号店',
      '工专路 3 号店',
      '工专路 4 号店',
      '工专路 5 号店',
      '工专路 6 号店'
    ];

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '1%',
        right: '0',
        bottom: '1%',
        top: '4%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220, 145, 245, 234, 157, 142]
        }
      ]
    };

    return {
      tabListNoTitle,
      option,
      data
    };
  }
});
</script>

<style lang="less">
.anliysis-list {
  .ant-list-item {
    display: flex;
  }
}
</style>
