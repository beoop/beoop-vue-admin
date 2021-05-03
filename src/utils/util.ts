import local from 'localforage';

export function getToken(): Promise<string | null> {
  return local.getItem<string>('token');
}

export const setToken = (token: string) => {
  local.setItem('token', token);
};
