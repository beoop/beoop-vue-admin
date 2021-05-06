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
  }
}
