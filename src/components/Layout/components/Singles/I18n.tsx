import { defineComponent, ref } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { availableLocales, locale, t } = useI18n();
    const selectedKeys = ref<string[]>([locale.value]);

    const onSelect = ({ key }: any) => {
      locale.value = key;
      selectedKeys.value = [key];
    };

    return () => (
      <a-dropdown>
        {{
          default: () => (
            <action-button>
              <GlobalOutlined />
            </action-button>
          ),
          overlay: () => (
            <a-menu v-model={[selectedKeys.value, 'selectedKeys']} mode="inline" onClick={onSelect}>
              {availableLocales.map((item) => {
                return <a-menu-item key={item}>{t(`locale.${item}`, item, { locale: 'en' })}</a-menu-item>;
              })}
            </a-menu>
          )
        }}
      </a-dropdown>
    );
  }
});
