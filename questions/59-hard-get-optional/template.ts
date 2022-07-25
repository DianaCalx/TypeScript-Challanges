export type GetOptional<T> = {[key in keyof T as {} extends Pick<T,key> ? key: never] : T[key]};
