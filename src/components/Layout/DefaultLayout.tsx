import { defineComponent } from 'vue';
import BHeader from './components/BHeader';
import Logo from './components/Singles/Logo.vue';
import BMenu from './components/BMenu';
import UserInfo from './components/Singles/UserInfo';

type DefaultLayoutLayout = 'top' | 'sider';

export default defineComponent({
  setup() {
    let layout: DefaultLayoutLayout = 'top';

    return () => {
      const TopLayout = (
        <a-layout>
          <BHeader>
            <Logo style="margin-right:24px" />
            <BMenu style="flex: 1 1 auto;" />
            <UserInfo />
          </BHeader>
          <a-layout-content style="overflow: hidden;padding: 12px;">
            <router-view />
          </a-layout-content>
          <a-layout-footer style="padding: 24px 12px; text-align: center;font-size: 12px;">
            Beoop Vue Admin ©2021 beoop
          </a-layout-footer>
        </a-layout>
      );

      if (layout === 'top') return TopLayout;

      return (
        <a-layout>
          <a-layout-sider></a-layout-sider>
          {TopLayout}
        </a-layout>
      );
    };
  }
});
