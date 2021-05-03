<template>
  <div>
    <a-row :gutter="24">
      <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card title="进行中的项目" :style="{ marginBottom: '24px' }">
          <template #extra><a href="#">全部项目</a></template>
          <a-card-grid>Content</a-card-grid>
          <a-card-grid :hoverable="false">Content</a-card-grid>
          <a-card-grid>Content</a-card-grid>
          <a-card-grid>Content</a-card-grid>
          <a-card-grid>Content</a-card-grid>
          <a-card-grid>Content</a-card-grid>
          <a-card-grid>Content</a-card-grid>
          <a-card-grid>Content</a-card-grid>
        </a-card>

        <a-card title="动态" :style="{ marginBottom: '24px' }">
          <a-list>
            <a-list-item :key="index" v-for="(item, index) in activities">
              <a-list-item-meta>
                <template #avatar>
                  <a-avatar :src="item.user.avatar" />
                </template>

                <template #title>
                  <span>{{ item.user.nickname }}</span
                  >&nbsp; 在&nbsp;<a href="#">{{ item.project.name }}</a
                  >&nbsp; <span>{{ item.project.action }}</span
                  >&nbsp;
                  <a href="#">{{ item.project.event }}</a>
                </template>
                <template #description>{{ item.time }}</template>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          title="快速开始 / 便捷导航"
          :style="{ marginBottom: '24px' }"
          :bordered="false"
          :body-style="{ padding: 0 }"
        >
          <div class="item-group">
            <a>操作一</a>
            <a>操作二</a>
            <a>操作三</a>
            <a>操作四</a>
            <a>操作五</a>
            <a>操作六</a>
            <a-button size="small" type="primary" ghost icon="plus"
              >添加</a-button
            >
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const activities: any[] = [
      {
        id: 1,
        user: {
          nickname: "@name",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        },
        project: {
          name: "白鹭酱油开发组",
          action: "更新",
          event: "番组计划",
        },
        time: "2018-08-23 14:47:00",
      },
      {
        id: 1,
        user: {
          nickname: "蓝莓酱",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
        },
        project: {
          name: "白鹭酱油开发组",
          action: "更新",
          event: "番组计划",
        },
        time: "2018-08-23 09:35:37",
      },
      {
        id: 1,
        user: {
          nickname: "@name",
          avatar: "@image(64x64)",
        },
        project: {
          name: "白鹭酱油开发组",
          action: "创建",
          event: "番组计划",
        },
        time: "2017-05-27 00:00:00",
      },
      {
        id: 1,
        user: {
          nickname: "曲丽丽",
          avatar: "@image(64x64)",
        },
        project: {
          name: "高逼格设计天团",
          action: "更新",
          event: "六月迭代",
        },
        time: "2018-08-23 14:47:00",
      },
      {
        id: 1,
        user: {
          nickname: "@name",
          avatar: "@image(64x64)",
        },
        project: {
          name: "高逼格设计天团",
          action: "created",
          event: "六月迭代",
        },
        time: "2018-08-23 14:47:00",
      },
      {
        id: 1,
        user: {
          nickname: "曲丽丽",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        },
        project: {
          name: "高逼格设计天团",
          action: "created",
          event: "六月迭代",
        },
        time: "2018-08-23 14:47:00",
      },
    ];

    return {
      activities,
    };
  },
});
</script>

<style lang="less">
.item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }
</style>
