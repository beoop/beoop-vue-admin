<template>
  <div>
    <a-card title="查询表格">
      <template #extra>
        <a-button type="primary">新建</a-button>
        <a-switch style="margin-left: 16px" checked-children="开" un-checked-children="关" v-model:checked="striped" />
      </template>
      <a-table
        :class="{ ['ant-table-striped']: striped }"
        rowKey="id"
        :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
        :columns="columns"
        :data-source="data"
        @change="onChange"
      />
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Axios from 'axios';
import { TableDataType, PaginationType, FilterType, ColumnType } from './types';

const columns: ColumnType[] = [
  {
    title: '序号',
    dataIndex: 'id',
  },
  {
    title: '订单号',
    dataIndex: 'oid',
  },
  {
    title: '消费者',
    dataIndex: 'user_name',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '地区',
    dataIndex: 'region',
  },
  {
    title: '金额',
    dataIndex: 'money',
    sorter: (a: TableDataType, b: TableDataType) => a.money - b.money,
  },
  {
    title: '支付方式',
    dataIndex: 'pay_mode',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '下单时间',
    dataIndex: 'created_at',
    // sorter: (a: TableDataType, b: TableDataType) => a.created_at - b.created_at,
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
];

export default defineComponent({
  setup() {
    const striped = ref<boolean>(false);
    const data = ref([]);
    const onChange = (pagination: PaginationType, filters: FilterType[], sorter: ColumnType) => {
      console.log('params', pagination, filters, sorter);
    };

    Axios.get('/list/table_list').then((res) => {
      data.value = res.data;
    });

    return {
      data,
      columns,
      onChange,
      striped,
    };
  },
});
</script>

<style lang="less">
.ant-table-striped .table-striped {
  background-color: #fafafa;
}
</style>
