export type RequiredKeys<T> = keyof { [key in keyof T as {} extends Pick<T, key> ? never : key]: T[key] };
