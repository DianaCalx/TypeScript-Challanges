export type Last<T extends any[]> = T extends [...infer Values, infer L] ? L : never;
