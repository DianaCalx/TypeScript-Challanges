export type GetRequired<T> =  {[key in keyof T as {} extends Pick<T, key>? never : key]: T[key]};
