import { Module } from 'vuex';
import { ModuleState } from '.';
import { login, logut, getInfo } from '@/api/user';
import { setToken } from '@/utils/util';

const app: Module<Beoop.UserInfo, ModuleState> = {
  state: {
    id: -1,
    username: '',
    avatar: '',
    lastLoginIp: '',
    lastLoginTime: -1,
    lang: '',
    roles: '',
    token: ''
  },
  getters: {
    roles: (state) => state.roles
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      setToken(token);
    },
    SET_UERRINFO: <T extends Beoop.UserInfo, K extends keyof T>(state: T, { key, value }: { key: K; value: T[K] }) => {
      state[key] = value;
    }
  },
  actions: {
    Login({ commit }, parameter: Beoop.Api.LoginParameter) {
      return new Promise((resolve, reject) => {
        login(parameter)
          .then((response: any) => {
            const { code, message, data } = response;
            if (code === 200) {
              // commit('SET_TOKEN', data.token);
              Object.keys(data as Beoop.UserInfo).forEach((key) => {
                commit('SET_UERRINFO', { key: key, value: data[key] });
                if (key === 'token') {
                  commit('SET_TOKEN', data[key]);
                }
              });
              resolve(data);
            } else {
              reject(message);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((response: any) => {
            const { code, message, data } = response;
            if (code === 200) {
              Object.keys(data as Beoop.UserInfo).forEach((key) => {
                if (key !== 'token') {
                  commit('SET_UERRINFO', { key: key, value: data[key] });
                }
              });
              resolve(data);
            } else {
              reject(message);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    Logut({ commit }) {
      return new Promise<void>((resolve) => {
        logut().finally(() => {
          resolve();
          commit('SET_TOKEN', '');
        });
      });
    }
  }
};

export default app;
