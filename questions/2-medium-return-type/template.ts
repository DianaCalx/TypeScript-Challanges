export type MyReturnType<U> = U extends (...values : any[]) => infer Type ? Type : U;
