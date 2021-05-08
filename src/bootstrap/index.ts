import { App } from 'vue';
import antd from 'ant-design-vue';
import { ActionButton, IconFont } from '@/components/';
import Components from './components';
import config from '@/config';
import i18n from '@/i18n';

function install(app: App) {
  app.component('action-button', ActionButton);
  app.component('icon-font', IconFont);
  // app.use(Components);
  app.use(antd);

  if (config.app.useI18n) app.use(i18n);
}

export default {
  install
};
