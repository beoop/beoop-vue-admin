import { App } from 'vue';
import ActionButton from '@/components/Singles/ActionButton';
import Components from './components';

function install(app: App) {
  app.component('action-button', ActionButton);
  app.use(Components);
}

export default {
  install
};
