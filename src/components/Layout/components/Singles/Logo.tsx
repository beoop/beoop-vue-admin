import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import config from '@/config';

export default defineComponent({
  props: {
    mini: Boolean
  },
  setup(props) {
    const store = useStore();
    return () => (
      <router-link to={{ name: config.app.homeName }} class="beoop-logo">
        <img src={store.state.app.logo} />
        {!props.mini && <h1>{store.state.app.title}</h1>}
      </router-link>
    );
  }
});
