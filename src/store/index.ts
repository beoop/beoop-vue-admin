import { createStore } from 'vuex';
import modules, { ModuleState } from './modules';

export default createStore<ModuleState>({
  modules
});
