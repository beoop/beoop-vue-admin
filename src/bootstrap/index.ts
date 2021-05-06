import { App } from 'vue';
import antd from 'ant-design-vue';
import { ActionButton, IconFont } from '@/components/';
import Components from './components';

function install(app: App) {
  app.component('action-button', ActionButton);
  app.component('icon-font', IconFont);
  // app.use(Components);
  app.use(antd);
}

export default {
  install
};
