export type Pop<T extends any[]> = T extends [...infer Values, infer L] ? Values : never;
