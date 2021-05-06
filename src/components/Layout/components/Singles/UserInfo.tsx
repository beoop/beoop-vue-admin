import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();

    const router = useRouter();
    const onLogut = () => {
      store.dispatch('Logut').finally(() => {
        router.push({ name: 'Login' });
      });
    };
    return () => {
      return (
        <a-dropdown>
          {{
            default: () => (
              <action-button style="flex:0 0 auto">
                <a-avatar
                  style="margin-right: 6px"
                  src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2062164223,3783917881&fm=26&gp=0.jpg"
                />
                {store.state.user.username}
              </action-button>
            ),
            overlay: () => (
              <a-menu>
                <a-menu-item icon="el-icon-user-solid"> 个人中心 </a-menu-item>
                <a-menu-item icon="el-icon-s-operation"> 个人设置 </a-menu-item>
                <a-menu-item icon="el-icon-switch-button" divided onClick={onLogut}>
                  退出登录
                </a-menu-item>
              </a-menu>
            )
          }}
        </a-dropdown>
      );
    };
  }
});
