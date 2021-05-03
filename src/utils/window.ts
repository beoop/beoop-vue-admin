import { RouteLocationNormalized } from 'vue-router';
import store from '@/store';

class BWin {
  _window: Window;

  constructor() {
    this._window = window;
  }

  /**
   * 设置标题
   *
   * @param {RouteLocationNormalized} route
   * @return {*}
   * @memberof BWin
   */
  title(route: RouteLocationNormalized): this {
    const resTitle = store.state.app.title;
    window.document.title = resTitle;
    return this;
  }

  /**
   * 滚动
   *
   * @param {number} x
   * @param {number} y
   * @return {*}
   * @memberof BWin
   */
  scrollTo(x: number, y: number): this {
    this._window.scrollTo(x, y);
    return this;
  }
}

export default new BWin();
