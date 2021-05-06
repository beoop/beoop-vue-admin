import { ref, toRef } from 'vue';
import { useRoute, onBeforeRouteUpdate, RouteRecordName, useRouter } from 'vue-router';
import config from '@/config';

interface MultipleTab {
  key: RouteRecordName;
  closable?: boolean;
}

const tabs = ref<MultipleTab[]>([]);

function createMultipleTabs() {
  const { add, activeKey } = useMultipleTabs();
  const addCallback = (name?: any, closable?: boolean) => add(name, closable);

  onBeforeRouteUpdate(({ name }) => addCallback(name));
  [config.app.homeName, activeKey.value].forEach((name, i) => addCallback(name, i != 0));
}

export type RemoveMode = 'left' | 'right' | 'other' | 'all';

function useMultipleTabs() {
  const router = useRouter();
  const activeKey = toRef(useRoute(), 'name');
  console.log('useRoute().', useRoute().matched);

  const add = (name: RouteRecordName, closable: boolean = true) => {
    if (tabs.value.find((item) => item.key == name)) {
    } else {
      tabs.value.push({
        key: name,
        closable
      });
    }
  };

  const remove = (targetKey: string, mode?: RemoveMode) => {
    let currentIndex = 0;
    let lastIndex: number | null = null;
    tabs.value.forEach((pane: MultipleTab, i: number) => {
      if (pane.key === targetKey) {
        currentIndex = i;
      }
    });

    tabs.value = tabs.value.filter((page: MultipleTab, index: number) => {
      if (!page.closable) return true;
      let isKeep;

      if (mode) {
        switch (mode) {
          case 'left':
            isKeep = index >= currentIndex;
            break;
          case 'right':
            isKeep = index <= currentIndex;
            break;
          case 'other':
            isKeep = index === currentIndex;
            break;
          case 'all':
            isKeep = false;
            lastIndex = 0;
            break;
        }
      } else {
        isKeep = index !== currentIndex;
        if (!isKeep) {
          lastIndex = currentIndex;
        }
      }

      return isKeep;
    });

    if (lastIndex !== null && tabs.value.length && activeKey.value === targetKey) {
      if (tabs.value.length - 1 < lastIndex) {
        lastIndex--;
      } else if (lastIndex < 0) {
        lastIndex = 0;
      }
      select(tabs.value[lastIndex].key.toString());
    }
  };

  const select = (key: string) => {
    router.push({ name: key });
  };

  return {
    tabs,
    activeKey,
    remove,
    add,
    select
  };
}

export { createMultipleTabs, useMultipleTabs };
