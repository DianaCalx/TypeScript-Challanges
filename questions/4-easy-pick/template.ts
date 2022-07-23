export type MyPick<T, K extends keyof T> = { [Index in K]: T[Index] };
