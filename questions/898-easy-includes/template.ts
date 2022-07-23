export type Includes<T extends readonly any[], U> =
T extends [infer Value, ...infer Rest]
? Equal<Value, U> extends true
   ? true
   : Includes<Rest, U>
: false;
