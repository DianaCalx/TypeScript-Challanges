export type If<Val extends boolean, F, S> = Val extends true ? F : S;
