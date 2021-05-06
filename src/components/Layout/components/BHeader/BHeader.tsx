import { defineComponent } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import {
  useSetting,
  menuMode,
  offestCollapsed,
  drawerCollapsed,
  siderCollapsed,
  siderUserCollapsed,
  isXs
} from '../../Config';
import UserInfo from '../Singles/UserInfo';
import BMenu from '../BMenu';
import Logo from '../Singles/Logo';
import AutoBreadCrumb from '@/components/AutoBreadcrumb';

export default defineComponent({
  setup(props, { slots }) {
    const setting = useSetting();
    const logoVNode = <Logo mini={offestCollapsed.value} />;
    const menuVNode = <BMenu mode={menuMode.value} />;
    const onCollapsed = () => {
      if (isXs.value) {
        drawerCollapsed.value = !drawerCollapsed.value;
      } else {
        siderUserCollapsed.value = !siderUserCollapsed.value;
      }
    };
    const collapsedBtn = (
      <action-button onClick={onCollapsed}>
        {siderCollapsed.value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </action-button>
    );

    return () => (
      <div class="b-header">
        <a-layout-header>
          {setting.layout.value === 'top' ? (
            <a-space style="flex: 1 1 auto;">
              {logoVNode}
              {menuVNode}
            </a-space>
          ) : (
            <a-space style="flex: 1 1 auto;">
              {collapsedBtn}
              {<AutoBreadCrumb />}
            </a-space>
          )}
          <UserInfo />
        </a-layout-header>
        {slots['bottom'] ? slots['bottom']() : null}
      </div>
    );
  }
});
