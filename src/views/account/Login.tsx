import { defineComponent } from 'vue';
import router from '@/router';
import { useStore } from 'vuex';
import { message } from 'ant-design-vue';
import { QqOutlined, WechatFilled, GithubOutlined, AlipayCircleFilled } from '@ant-design/icons-vue';
import config from '@/config';

import { Logo } from '@/components';
import { LoginForm } from '@/components/Form';
import { loginModelProps } from './props';
import './login.less';

export default defineComponent({
  components: { QqOutlined, WechatFilled, GithubOutlined, AlipayCircleFilled },
  setup() {
    const store = useStore();
    const LoginFormProps = {
      onSubmit: (parameter: Beoop.Api.LoginParameter) => {
        store
          .dispatch('Login', parameter)
          .then((res) => {
            store.dispatch('GetInfo').then((res) => {
              router.push({ name: config.app.homeName });
            });
          })
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
