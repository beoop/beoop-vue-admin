<template>
  <div class="beoop-logo">
    <img :src="app.logo" />
    <h1>{{ app.title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      app: store.state.app
    };
  }
});
</script>
