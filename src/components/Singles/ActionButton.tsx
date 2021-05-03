import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    return () => {
      return <div class="action-btn">{slots.default?.()}</div>;
    };
  }
});
