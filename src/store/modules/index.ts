import app from './app';
import user from './user';

export interface ModuleState {
  app: AppState;
}

export default {
  app,
  user
};
