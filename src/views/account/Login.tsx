import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { message } from 'ant-design-vue';
import { QqOutlined, WechatFilled, GithubOutlined, AlipayCircleFilled } from '@ant-design/icons-vue';

import { Logo } from '@/components';
import { LoginForm } from '@/components/form';
import { loginModelProps } from './props';
import './login.less';

export default defineComponent({
  components: { Logo, QqOutlined, WechatFilled, GithubOutlined, AlipayCircleFilled },
  setup() {
    const store = useStore();
    const LoginFormProps = {
      onSubmit: (parameter: Beoop.Api.LoginParameter) => {
        store
          .dispatch('Login', parameter)
          .then((res) => {})
          .catch((error) => {
            message.info(error);
          });
      }
    };
    return () => (
      <div class="login">
        <a-modal {...loginModelProps}>
          <div class="login-header">
            <Logo />
          </div>
          <LoginForm {...LoginFormProps} />
          <div style="display: flex; align-items: center">
            <span style="margin-right: 12px">第三方登录</span>
            <a-space style={{ fontSize: '24px', color: 'rgba(0,0,0,.25)' }}>
              <QqOutlined />
              <WechatFilled />
              <AlipayCircleFilled />
              <GithubOutlined />
            </a-space>
          </div>
        </a-modal>
      </div>
    );
  }
});
