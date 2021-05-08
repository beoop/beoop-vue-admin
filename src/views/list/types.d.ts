export type TableDataType = {
  id: number;
  oid: string;
  user_name: string;
  phone: string;
  region: string;
  money: number;
  pay_mode: string;
  state: string;
  created_at: Date;
};

export type PaginationType = {
  current: number;
  pageSize: number;
};

export type FilterType = {
  name: string;
  address: string;
};

export type ColumnType = {
  title: string;
  dataIndex: string;
  filters?: {
    text: string;
    value: string;
    children?: {
      text: string;
      value: string;
    }[];
  }[];
  onFilter?: (value: string, record: TableDataType) => boolean;
  sorter?: (a: TableDataType, b: TableDataType) => number;
  sortDirections?: string[];
  defaultSortOrder?: string;
  filterMultiple?: string[] | boolean;
};
