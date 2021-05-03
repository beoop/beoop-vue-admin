declare namespace Beoop {
  interface BPermission {
    /**
     * 路由白名单
     *
     * @type {string[]}
     * @memberof BPermission
     */
    whitelist?: string[];

    /**
     * 未登录用户页
     *
     * @type {string}
     * @memberof BPermission
     */
    visitorPage: string;
  }
}
