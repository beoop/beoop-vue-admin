import { reactive, readonly, toRefs, computed, ref } from 'vue';

import { useResizeObserver } from '@/utils/resize';
import { oneOf } from '@/utils';
import layout from '@/config/layout';

const { breakpoint } = useResizeObserver();

const setting = reactive<Beoop.LayoutSetting>(layout);
export function useSetting() {
  return toRefs(setting);
}
export const drawerCollapsed = ref<boolean>(true);
export const siderUserCollapsed = ref<boolean | null>(null);
/** 是否xs */
export const isXs = computed(() => breakpoint.value === 'xs');
/** 收缩宽度 */
export const collapsedWidth = computed(() => (isXs.value ? 0 : 80));
/** 自动 */
export const offestCollapsed = computed(() => oneOf(breakpoint.value, ['md', 'sm', 'xs']));
/** 菜单自动 */
export const menuMode = computed(() => (setting.layout === 'top' ? 'horizontal' : 'inline'));
/** 侧栏收缩 */
export const siderCollapsed = computed(() => {
  if (isXs.value) return true;
  if (siderUserCollapsed.value !== null) {
    return siderUserCollapsed.value;
  }

  if (!breakpoint.value) return false;
  return offestCollapsed.value;
});
