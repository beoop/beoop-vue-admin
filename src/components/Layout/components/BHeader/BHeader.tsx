import { defineComponent } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import AutoBreadCrumb from '@/components/AutoBreadcrumb';
import config from '@/config';
import MultipleTabs from '@/components/MultipleTabs';
import UserInfo from '../Singles/UserInfo';
import BMenu from '../BMenu';
import Logo from '../Singles/Logo';
import I18n from '../Singles/I18n';
import Notification from '../Singles/Notification';
import {
  useSetting,
  menuMode,
  offestCollapsed,
  drawerCollapsed,
  siderCollapsed,
  siderUserCollapsed,
  isXs
} from '../../Config';

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
        <a-layout-header style={{ borderBottom: setting.fixedMultipleTabs.value ? '1px solid #f5f5f5' : null }}>
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
          <Notification />
          {config.app.useI18n && <I18n />}
          <UserInfo />
        </a-layout-header>
        {setting.multipleTabs.value && setting.fixedMultipleTabs.value && (
          <div style="padding: 4px 12px;background: #fff;">
            <MultipleTabs />
          </div>
        )}
      </div>
    );
  }
});
