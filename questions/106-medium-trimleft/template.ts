type Whitespace = " " | "\n" | "\t";

export type TrimLeft<S> = S extends `${Whitespace}${infer T}` ? TrimLeft<T> : S;
