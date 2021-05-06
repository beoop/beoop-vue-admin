import win from './window';

export { win };

export function oneOf(value: any, validList: Array<any>): boolean {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
