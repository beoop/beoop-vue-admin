import Affix from 'ant-design-vue/lib/affix';
import Anchor from 'ant-design-vue/lib/anchor';
import AutoComplete from 'ant-design-vue/lib/auto-complete';
import Alert from 'ant-design-vue/lib/alert';
import Avatar from 'ant-design-vue/lib/avatar';
import BackTop from 'ant-design-vue/lib/back-top';
import Badge from 'ant-design-vue/lib/badge';
import Breadcrumb from 'ant-design-vue/lib/breadcrumb';
import Button from 'ant-design-vue/lib/button';
import Calendar from 'ant-design-vue/lib/calendar';
import Card from 'ant-design-vue/lib/card';
import Collapse from 'ant-design-vue/lib/collapse';
import Carousel from 'ant-design-vue/lib/carousel';
import Cascader from 'ant-design-vue/lib/cascader';
import Checkbox from 'ant-design-vue/lib/checkbox';
import Col from 'ant-design-vue/lib/col';
import DatePicker from 'ant-design-vue/lib/date-picker';
import Divider from 'ant-design-vue/lib/divider';
import Dropdown from 'ant-design-vue/lib/dropdown';
import Form from 'ant-design-vue/lib/form';
import Icon from 'ant-design-vue/lib/icon';
import Input from 'ant-design-vue/lib/input';
import InputNumber from 'ant-design-vue/lib/input-number';
import Layout from 'ant-design-vue/lib/layout';
import List from 'ant-design-vue/lib/list';
import LocaleProvider from 'ant-design-vue/lib/locale-provider';
import message from 'ant-design-vue/lib/message';
import Menu from 'ant-design-vue/lib/menu';
import Mentions from 'ant-design-vue/lib/mentions';
import Modal from 'ant-design-vue/lib/modal';
import notification from 'ant-design-vue/lib/notification';
import Pagination from 'ant-design-vue/lib/pagination';
import Popconfirm from 'ant-design-vue/lib/popconfirm';
import Popover from 'ant-design-vue/lib/popover';
import Progress from 'ant-design-vue/lib/progress';
import Radio from 'ant-design-vue/lib/radio';
import Rate from 'ant-design-vue/lib/rate';
import Row from 'ant-design-vue/lib/row';
import Select from 'ant-design-vue/lib/select';
import Slider from 'ant-design-vue/lib/slider';
import Spin from 'ant-design-vue/lib/spin';
import Statistic from 'ant-design-vue/lib/statistic';
import Steps from 'ant-design-vue/lib/steps';
import Switch from 'ant-design-vue/lib/switch';
import Table from 'ant-design-vue/lib/table';
import Transfer from 'ant-design-vue/lib/transfer';
import Tree from 'ant-design-vue/lib/tree';
import TreeSelect from 'ant-design-vue/lib/tree-select';
import Tabs from 'ant-design-vue/lib/tabs';
import Tag from 'ant-design-vue/lib/tag';
import TimePicker from 'ant-design-vue/lib/time-picker';
import Timeline from 'ant-design-vue/lib/timeline';
import Tooltip from 'ant-design-vue/lib/tooltip';
import Upload from 'ant-design-vue/lib/upload';
import version from 'ant-design-vue/lib/version';
import Drawer from 'ant-design-vue/lib/drawer';
import Skeleton from 'ant-design-vue/lib/skeleton';
import Comment from 'ant-design-vue/lib/comment';
import Image from 'ant-design-vue/lib/image';
import ConfigProvider from 'ant-design-vue/lib/config-provider';
import Empty from 'ant-design-vue/lib/empty';
import Result from 'ant-design-vue/lib/result';
import Descriptions from 'ant-design-vue/lib/descriptions';
import PageHeader from 'ant-design-vue/lib/page-header';
import Space from 'ant-design-vue/lib/space';
import Typography from 'ant-design-vue/lib/typography';
import { App } from 'vue';

const components = [
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  message,
  Menu,
  Mentions,
  Modal,
  notification,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  Image,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,
  Typography
];

export default {
  install: (app: App) => {
    components.forEach((item: any) => {
      app.use(item);
    });
  }
};
