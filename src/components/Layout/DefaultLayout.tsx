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

    return () => {
      const logoVNode = <Logo mini={!isXs.value && siderCollapsed.value} />;
      const headerStyle = computed(() => {
        const style: CSSProperties = {};
        if (setting.fixedHead.value) {
          style.width = 'calc(100% - 0px)';
        }
        return style;
      });
      const headerCls = computed(() => {
        return { 'header-fiexd': setting.fixedHead.value };
      });

      const containerVNode: VNode[] = [];
      const menuVNode = <BMenu style="flex: 1 1 auto;" mode={menuMode.value} />;
      const multipleTabs = <MultipleTabs />;
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
        <a-layout-content style="overflow: hidden;padding: 12px;">
          {setting.multipleTabs.value && !setting.fixedMultipleTabs.value && multipleTabs}
          <router-view />
        </a-layout-content>
      );
      const footerVNode = (
        <a-layout-footer style="padding: 24px 12px; text-align: center;font-size: 12px;">
          Beoop Vue Admin ©2021 beoop
        </a-layout-footer>
      );
      const basicVNode: VNode[] = [headerVNode, mainVNode, footerVNode];
      const siderVNode = (
        <a-layout-sider collapsedWidth={collapsedWidth.value} collapsed={siderCollapsed.value}>
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
        <a-layout style="min-height: 100vh;">
          {isXs.value && drawerVNode}
          {layoutContentVNode}
        </a-layout>
      );
      containerVNode.push(<Setting />);

      return containerVNode;
    };
  }
});
