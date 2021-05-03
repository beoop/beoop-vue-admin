import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
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
                Serati Ma
              </action-button>
            ),
            overlay: () => (
              <a-menu>
                <a-menu-item icon="el-icon-user-solid"> 个人中心 </a-menu-item>
                <a-menu-item icon="el-icon-s-operation"> 个人设置 </a-menu-item>
                <a-menu-item icon="el-icon-switch-button" divided>
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
