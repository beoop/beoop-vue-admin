export interface MockOption<T = {}> {
  body: string | T;
  type: 'GET' | 'POST';
  url: string;
}
