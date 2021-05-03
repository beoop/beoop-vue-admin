import Mock from 'mockjs';
import { getBody, builder, decrypt } from '../utils';
import { MockOption } from '../types';

const username = ['admin', 'super'];

const password = ['admin']; // admin, ant.design

const login = (option: MockOption<Beoop.Api.LoginParameter>) => {
  const body = getBody(option);

  if (!username.includes(body.username) || !password.includes(decrypt(body.password))) {
    return builder({ isLogin: true }, '账户或密码错误', 401);
  }

  return builder(
    {
      id: Mock.mock('@guid'),
      name: Mock.mock('@name'),
      username: 'admin',
      password: '',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
      status: 1,
      telephone: '',
      lastLoginIp: '27.154.74.117',
      lastLoginTime: 1534837621348,
      creatorId: 'admin',
      createTime: 1497160610259,
      deleted: 0,
      roleId: 'admin',
      lang: 'zh-CN',
      token: '4291d7da9005377ec9aec4a71ea837f'
    },
    '',
    200,
    { 'Custom-Header': Mock.mock('@guid') }
  );
};

Mock.mock(/\/auth\/login/, 'post', login);