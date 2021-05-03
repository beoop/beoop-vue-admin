import axios from 'axios';
import config from '@/config';

const baseUrl = config.app.baseUrl;

const request = axios.create({
  baseURL: typeof baseUrl === 'string' ? baseUrl : __DEV__ ? baseUrl.dev : baseUrl.pro
});

export { request };
