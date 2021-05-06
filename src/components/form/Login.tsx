import { defineComponent, reactive, ref, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';

const LoginForm = defineComponent({
  emits: {
    submit: (payload) => {
      if (payload.username && payload.password) {
        return true;
      } else {
        console.warn(`Invalid submit event payload!`);
        return false;
      }
    }
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const loginRef = reactive<Beoop.Api.LoginParameter>({
      username: '',
      password: ''
    });

    const loginRulesRef = reactive({
      username: [
        {
          required: true,
          message: 'Please input Activity name'
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please select region'
        }
      ]
    });

    const onSubmit = () => {
      loading.value = true;
      setTimeout(() => {
        validate()
          .then(() => {
            emit('submit', loginRef);
          })
          .catch((err) => {
            console.log('error', err);
          })
          .finally(() => {
            loading.value = false;
          });
      }, 1000);
    };

    const { resetFields, validate, validateInfos } = useForm(loginRef, loginRulesRef);

    const inputProps = (placeholder = '') => {
      return {
        size: 'large',
        placeholder
      };
    };

    return () => {
      return (
        <a-form wrapperCol={{ span: 24 }}>
          <a-form-item {...validateInfos.username}>
            <a-input v-model={[loginRef.username, 'value']} {...inputProps('账号 admin')} />
          </a-form-item>
          <a-form-item {...validateInfos.password}>
            <a-input-password v-model={[loginRef.password, 'value']} {...inputProps('密码 admin')} />
          </a-form-item>
          <a-form-item wrapperCol={{ span: 24 }}>
            <a-button type="primary" size="large" onClick={onSubmit} block loading={loading.value}>
              登录
            </a-button>
          </a-form-item>
        </a-form>
      );
    };
  }
});

export { LoginForm };
