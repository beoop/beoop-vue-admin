import { defineComponent } from 'vue';
import { BellOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    return () => {
      return (
        <a-popover>
          {{
            content: () => (
              <>
                <p>Content</p>
                <p>Content</p>
              </>
            ),
            default: () => (
              <action-button>
                <BellOutlined />
              </action-button>
            )
          }}
        </a-popover>
      );
    };
  }
});
