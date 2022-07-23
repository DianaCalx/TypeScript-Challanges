export type MyOmit<T, K> = { [Prop in keyof T as Prop extends K ? never : Prop]: T[Prop] };
