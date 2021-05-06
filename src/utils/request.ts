import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '@/config';
import { getToken } from './util';

const baseUrl = config.app.baseUrl;

const axios = Axios.create({
  baseURL: typeof baseUrl === 'string' ? baseUrl : __DEV__ ? baseUrl.dev : baseUrl.pro
});

axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['token'] = token;
  }
  return config;
});

function request<T = {}>(config: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axios(config)
      .then((res: AxiosResponse<T>) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch((error) => {
        throw error;
      });
  });
}

export { request };
