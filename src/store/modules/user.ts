import { Module } from 'vuex';
import { ModuleState } from '.';
import { login } from '@/api/user';
import { setToken } from '@/utils/util';

const app: Module<any, ModuleState> = {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      console.log('token', token);

      state.token = token;
      setToken(token);
    }
  },
  actions: {
    Login({ commit }, parameter: Beoop.Api.LoginParameter) {
      return new Promise((resolve, reject) => {
        login(parameter)
          .then((response) => {
            const { code, message, token } = response.data;
            console.log('response.data', response.data.result);

            if (code === 401) {
              reject(message);
            } else if (code === 200) {
              commit('SET_TOKEN', response.data.result.token);
              resolve(response.data);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  }
};

export default app;
