import { defineComponent, reactive, computed, ref, VNode, CSSProperties } from 'vue';
import BHeader from './components/BHeader';
import Logo from './components/Singles/Logo';
import BMenu from './components/BMenu';
import Setting from './Setting';
import { useSetting, siderCollapsed, isXs, collapsedWidth, menuMode, drawerCollapsed } from './Config';
import MultipleTabs from '../MultipleTabs';

export default defineComponent({
  setup() {
    const setting = useSetting();

    const siderWidth = 260;

    return () => {
      const logoVNode = <Logo mini={!isXs.value && siderCollapsed.value} style="border-bottom: 1px solid #000c17;" />;
      const headerStyle = computed(() => {
        const style: CSSProperties = {};
        if (setting.fixedHead.value) {
          style.width = `calc(100% - ${
            setting.layout.value === 'sider' && setting.fixedSider.value
              ? siderCollapsed.value
                ? collapsedWidth.value
                : siderWidth
              : 0
          }px)`;
        }
        return style;
      });

      const headerCls = computed(() => {
        return { 'header-fiexd': setting.fixedHead.value };
      });

      const containerVNode: VNode[] = [];
      const menuVNode = (
        <BMenu
          style="flex: 1 1 auto;overflow-y: auto; height: calc(100vh - 48px);"
          mode={menuMode.value}
          theme="dark"
        />
      );
      const multipleTabs = <MultipleTabs style="padding: 4px 12px;" />;
      const layoutVNode: VNode[] = [logoVNode, menuVNode];
      const drawerVNode = (
        <a-drawer
          placement="left"
          closable={false}
          width={220}
          visible={!drawerCollapsed.value}
          bodyStyle={{ padding: 0 }}
          onClose={() => (drawerCollapsed.value = true)}
        >
          {layoutVNode}
        </a-drawer>
      );

      // const HeaderVNdeChildren = setting.layout.value === 'top' ? layoutVNode : null;
      // const headerDefaultVNode = [HeaderVNdeChildren];
      // const headerBottomVNode = setting.multipleTabs.value && setting.fixedMultipleTabs.value && multipleTabs;
      const headerVNode = <BHeader style={headerStyle.value} class={headerCls.value}></BHeader>;
      const mainVNode = (
        <a-layout-content
          style={{
            overflow: 'hidden',
            marginTop: setting.fixedHead.value && setting.fixedMultipleTabs.value ? '88px' : null
          }}
        >
          {setting.multipleTabs.value && !setting.fixedMultipleTabs.value && multipleTabs}
          <div style="padding: 12px 24px;">
            <router-view />
          </div>
        </a-layout-content>
      );
      const footerVNode = (
        <a-layout-footer style="padding: 24px 12px; text-align: center;font-size: 12px;">
          Beoop Vue Admin ©2021 beoop
        </a-layout-footer>
      );
      const basicVNode: VNode[] = [headerVNode, mainVNode, footerVNode];

      const siderVNode = (
        <a-layout-sider
          width={siderWidth}
          class={{ 'fiexd-sider': setting.fixedSider.value }}
          collapsedWidth={collapsedWidth.value}
          collapsed={siderCollapsed.value}
        >
          {{ default: () => setting.layout.value === 'sider' && layoutVNode }}
        </a-layout-sider>
      );
      const layoutContentVNode =
        setting.layout.value === 'sider' ? (
          <>
            {siderVNode}
            <a-layout>{basicVNode}</a-layout>
          </>
        ) : (
          basicVNode
        );
      containerVNode.push(
        <a-layout
          style={{
            minHeight: '100vh',
            marginLeft: `${
              setting.layout.value === 'sider' && setting.fixedSider.value
                ? siderCollapsed.value
                  ? collapsedWidth.value
                  : siderWidth
                : 0
            }px`
          }}
        >
          {isXs.value && drawerVNode}
          {layoutContentVNode}
        </a-layout>
      );
      containerVNode.push(<Setting />);

      return containerVNode;
    };
  }
});
