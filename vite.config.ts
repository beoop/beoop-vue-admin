import { join } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

function resolve(dir: string) {
  return join(__dirname, dir);
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: './',
    resolve: {
      alias: {
        '@': resolve('src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    define: {
      // __DEV__: 'false'
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    build: {
      rollupOptions: {}
    },
    plugins: [vue(), vueJsx()]
  });
};
