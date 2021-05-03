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

<style lang="less">
.beoop-logo {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  min-width: 200px;

  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }

  h1 {
    display: inline-block;
    height: 32px;
    margin: 0 0 0 12px;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    vertical-align: middle;
    color: #1890ff;
  }
}
</style>
