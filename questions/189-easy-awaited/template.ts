export type Awaited<P> = P extends Promise<infer T> ? T extends Promise<unknown> ? Awaited<T> : T : P;
