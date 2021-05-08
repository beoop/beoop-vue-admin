import { defineComponent, VNodeChild } from 'vue';
import {
  MoreOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  CloseSquareOutlined,
  CloseOutlined
} from '@ant-design/icons-vue';
import { useMultipleTabs, RemoveMode, createMultipleTabs } from './api';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}

export default defineComponent({
  setup() {
    createMultipleTabs();
    const { tabs, activeKey, remove, select } = useMultipleTabs();

    const onEdit = (targetKey: string | MouseEvent, action: string) => {
      if (action === 'add') {
        // add();
      } else {
        remove(targetKey as string);
      }
    };

    const onAction = ({ key }: MenuInfo) => {
      if (activeKey.value) {
        remove(activeKey.value as string, key as RemoveMode);
      }
    };

    const multipleTabProps = {
      hideAdd: true,
      type: 'editable-card',
      onEdit: onEdit,
      onChange: select,
      class: 'nop-multiple-tabs'
    };

    return () => (
      <a-tabs activeKey={activeKey.value} {...multipleTabProps}>
        {{
          default: () =>
            tabs.value.map((item) => <a-tab-pane key={item.key} tab={item.key} closable={item.closable} />),
          tabBarExtraContent: () => (
            <a-dropdown>
              {{
                default: () => <a-button>{{ icon: () => <MoreOutlined /> }}</a-button>,
                overlay: () => (
                  <a-menu onClick={onAction}>
                    <a-menu-item key="left">
                      <LeftSquareOutlined /> 关闭左侧{' '}
                    </a-menu-item>
                    <a-menu-item key="right">
                      <RightSquareOutlined /> 关闭右侧{' '}
                    </a-menu-item>
                    <a-menu-item key="other">
                      <CloseSquareOutlined /> 关闭其它{' '}
                    </a-menu-item>
                    <a-menu-item key="all">
                      {' '}
                      <CloseOutlined />
                      关闭全部{' '}
                    </a-menu-item>
                  </a-menu>
                )
              }}
            </a-dropdown>
          )
        }}
      </a-tabs>
    );
  }
});
