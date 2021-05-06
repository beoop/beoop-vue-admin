declare namespace Beoop {
  namespace Api {
    interface LoginParameter {
      username: string;
      password: string;
    }
  }

  interface UserInfo {
    /**
     * 用户 id
     */
    id: number;

    /**
     * 用户名
     *
     * @type {string}
     * @memberof UserInfo
     */
    username: string;

    /**
     * 头像地址
     *
     * @type {string}
     * @memberof UserInfo
     */
    avatar: string;

    /**
     * 用户状态
     *
     * @type {number}
     * @memberof UserInfo
     */
    status?: number;

    /**
     * 上次登录 ip
     *
     * @type {string}
     * @memberof UserInfo
     */
    lastLoginIp: string;

    /**
     * 上次登录时间
     *
     * @type {number}
     * @memberof UserInfo
     */
    lastLoginTime: number;

    /**
     * 国际化
     *
     * @type {string}
     * @memberof UserInfo
     */
    lang: string;

    /**
     * 角色
     *
     * @type {string}
     * @memberof UserInfo
     */
    roles: string | string[];

    /**
     * 用户 token
     *
     * @type {string}
     * @memberof UserInfo
     */
    token: string;
  }
}
