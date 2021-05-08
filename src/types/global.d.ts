declare var __DEV__: boolean;

/**
 * 配置提交得 Api 地址
 *
 * @interface BLConfigBaseUrl
 */
interface BLConfigBaseUrl {
  dev: string;
  pro: string;
}

interface UserState {
  /**
   * 角色
   *
   * @type {(string[] | string)}
   * @memberof UserState
   */
  roles: string[] | string;
}
