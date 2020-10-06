export type ValuesOf<T> = T[keyof T];
export type Filter<T, U> = T extends U ? T : never;

export type PropertiesOf<T> = T extends { [key: string]: infer U } ? U : never;
export type FunctionPropertiesOf<T> = T extends { [key: string]: infer U } ? (U extends Function ? U : never) : never;

export interface Gif {
  id: string;
  title: string;
  url: string;
  sourceUrl: string;
  width: number;
  height: number;
  createdAt: string;
  createdBy: string;
}
