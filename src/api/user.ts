import { request } from '@/utils/request';
import JSEncrypt from 'jsencrypt';
import Api from './index';

var encrypt = new JSEncrypt({});

encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
gwQco1KRMDSmXSMkDwIDAQAB
-----END PUBLIC KEY-----`);

export const login = ({ username, password }: Beoop.Api.LoginParameter) => {
  return request({
    url: Api.LOGIN,
    method: 'post',
    data: { username, password: encrypt.encrypt(password) }
  });
};

export const getInfo = () => {
  return request({
    url: Api.GETINFO,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
};

export const logut = () => {
  return request({
    url: Api.LOGUT,
    method: 'get'
  });
};

interface BResponse<T = {}> {
  data?: T;
  code: number;
  message?: string;
}
