declare namespace Beoop {
  interface LayoutSetting {
    /**
     * 布局
     *
     * @type {('top' | 'sider')}
     * @memberof LayoutSetting
     */
    layout: 'top' | 'sider';

    /**
     * 固定头部
     *
     * @type {boolean}
     * @memberof Setting
     */
    fixedHead: boolean;

    /**
     * 多标签页
     *
     * @type {boolean}
     * @memberof LayoutSetting
     */
    multipleTabs: boolean;

    /**
     * 固定多标签页
     *
     * @type {boolean}
     * @memberof LayoutSetting
     */
    fixedMultipleTabs: boolean;

    /**
     * 固定侧栏
     *
     * @type {boolean}
     * @memberof LayoutSetting
     */
    fixedSider: boolean;
  }

  /**
   * Logo 类型
   *
   * @interface LogoComplex
   */
  interface LogoComplex {
    title: string;
    icon: string;
  }

  type Logo = string | LogoComplex;

  /**
   * 应用程序用户状态
   *
   * @interface AppState
   */
  interface AppState {
    /**
     * 设置 网站中的 logo，
     *
     * @type {Logo}
     * @memberof BLConfig
     */
    logo: Logo;

    /**
     *  配置显示在浏览器标签的title
     *
     * @type {string}
     * @memberof BLConfig
     */
    title: string;

    /**
     * token在Cookie中存储的天数，默认1天
     *
     * @type {string}
     * @memberof BLConfig
     */
    cookieExpires: string;

    /**
     * 是否使用国际化，默认为false
     *
     * @type {boolean}
     * @memberof BLConfig
     */
    useI18n?: boolean;

    /**
     * api请求基础路径
     *
     * @type {(string | BLConfigBaseUrl)}
     * @memberof BLConfig
     */
    baseUrl: string | BLConfigBaseUrl;

    /**
     * 默认打开的首页的路由name值，默认为home
     *
     * @type {string}
     * @memberof BLConfig
     */
    homeName: string;

    /**
     * 需要加载的插件
     *
     * @type {Array<any>}
     * @memberof BLConfig
     */
    public?: Array<any>;
  }
}
