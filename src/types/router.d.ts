declare namespace Beoop {
  /**
   * 路由 Meta 配置
   *
   * @interface RouteMeta
   */
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    /**
     * 名称
     *
     * @type {string}
     * @memberof RouteMetaConfig
     */
    title?: string;

    /**
     * 图标
     *
     * @type {*}
     * @memberof RouteMetaConfig
     */
    icon?: any;

    /**
     * 跳转地址
     *
     * @type {string}
     * @memberof RouteMetaConfig
     */
    href?: string;

    /**
     * 权限许可
     *
     * @type {(string | string[])}
     * @memberof RouteMetaConfig
     */
    permission?: string | string[];
  }

  /**
   * 路由配置
   *
   * @interface RouteRecord
   */
  interface RouteRecordRaw {
    path: string;
    name: string;
    /**
     * 增加 Meta 自定义字段
     *
     * @type {RouteMetaConfig}
     * @memberof RouteConfig
     */
    meta?: RouteMeta;
  }
}
