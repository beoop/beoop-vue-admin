import Mock from 'mockjs';
import { getBody, builder, decrypt } from '../utils';
import { MockOption } from '../types';

const USERS: (Beoop.UserInfo & { password: string })[] = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    avatar: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg',
    status: 0,
    lastLoginIp: '27.114.32.152',
    lastLoginTime: 1534837621348,
    roles: 'admin',
    lang: 'zh-cn',
    token: '4291d7da9005377ec9aec4a71ea837f'
  },
  {
    id: 1,
    username: 'super',
    password: 'super',
    avatar: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3155998395,3600507640&fm=26&gp=0.jpg',
    status: 0,
    lastLoginIp: '27.114.32.152',
    lastLoginTime: 1534837621348,
    roles: 'user',
    lang: 'zh-cn',
    token: '4291d7da9005377ec9aec4a71ea837f'
  }
];

const login = (option: MockOption<Beoop.Api.LoginParameter>) => {
  const body = getBody(option);

  const userIndex = USERS.findIndex((item) => {
    return item.username === body.username && item.password === decrypt(body.password);
  });

  if (userIndex === -1) {
    return builder({ isLogin: true }, '账户或密码错误', 401);
  }

  return builder(USERS[userIndex], '', 200, { 'Custom-Header': Mock.mock('@guid') });
};

const getInfo = (option: MockOption) => {
  return builder(USERS[1], '', 200);
};

const logut = (option: MockOption) => {
  return builder({}, '', 200);
};

Mock.mock(/\/user\/login/, 'post', login);
Mock.mock(/\/user\/logut/, 'get', logut);
Mock.mock(/\/user\/info/, 'get', getInfo);
