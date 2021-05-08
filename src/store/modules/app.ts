import { Module } from 'vuex';
import { ModuleState } from '.';
import config from '@/config';
import routes from '@/config/routes';
import { getMenuByRouter } from '@/utils/router';

const app: Module<Beoop.AppState, ModuleState> = {
  state: config.app,
  getters: {
    menuList: () => getMenuByRouter(routes, 'Home')
  }
};

export default app;
