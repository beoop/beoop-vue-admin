import { toRefs, reactive } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';

interface IBreakpoints {
  [x: string]: number;
}

const breakpoints: IBreakpoints = {
  xxl: 1600,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 0
};

export interface ObserverSize {
  width: number;
  height: number;
  breakpoint: string | undefined;
  ob: ResizeObserver;
}

function getContainer() {
  return document.body;
}

const observers = new Map<HTMLElement, ObserverSize>();

function refResizeObserver(element: HTMLElement = getContainer(), callback?: (size?: any) => void) {
  const size = reactive<ObserverSize>({
    width: element.offsetWidth,
    height: element.offsetHeight,
    ob: new ResizeObserver((entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        size.width = entry.contentRect.width;
        size.height = entry.contentRect.height;
        size.breakpoint = Object.keys(breakpoints).find((key) => size.width >= breakpoints[key]);
        if (callback) callback(size);
      }
    }),
    breakpoint: ''
  });

  size.ob.observe(element);
  observers.set(element, size);

  return size;
}

function unResizeObserver(element: HTMLElement = getContainer()) {
  observers.get(element)?.ob.unobserve(element);
  observers.delete(element);
}

function useResizeObserver(element: HTMLElement = getContainer()) {
  let size = observers.get(element);
  if (!size) {
    size = refResizeObserver(element);
  }

  return toRefs(size);
}

export { refResizeObserver, unResizeObserver, useResizeObserver };
