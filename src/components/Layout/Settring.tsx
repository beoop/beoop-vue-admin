import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => {
      return (
        <a-drawer>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-drawer>
      );
    };
  }
});
