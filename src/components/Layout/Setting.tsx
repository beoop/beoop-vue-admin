import { defineComponent, ref } from 'vue';
import { CloseOutlined, SettingFilled } from '@ant-design/icons-vue';
import { useSetting } from './Config';

export default defineComponent({
  setup() {
    const visible = ref(false);

    const setting = useSetting();

    const onVisible = () => {
      visible.value = !visible.value;
    };

    return () => {
      const btn = (
        <a-button type="primary" size="large" class="setting-visible" onClick={onVisible}>
          {{
            icon: () => (visible.value ? <CloseOutlined /> : <SettingFilled />)
          }}
        </a-button>
      );

      return (
        <div class="setting-container">
          <a-drawer v-model={[visible.value, 'visible']} closable={false} handle={btn} width={300}>
            <div class="setting">
              <div class="setting-cell">
                <span>布局 Layout</span>
                <a-select v-model={[setting.layout.value, 'value']}>
                  <a-select-option value="top">top</a-select-option>
                  <a-select-option value="sider">sider</a-select-option>
                </a-select>
              </div>
              <div class="setting-cell">
                <span>固定 Header</span>
                <a-switch size="small" v-model={[setting.fixedHead.value, 'checked']} />
              </div>
              <div class="setting-cell">
                <span>多标签页</span>
                <a-switch size="small" v-model={[setting.multipleTabs.value, 'checked']} />
              </div>
              {setting.multipleTabs.value && (
                <div class="setting-cell">
                  <span>固定多标签页</span>
                  <a-switch size="small" v-model={[setting.fixedMultipleTabs.value, 'checked']} />
                </div>
              )}
            </div>
          </a-drawer>
        </div>
      );
    };
  }
});
