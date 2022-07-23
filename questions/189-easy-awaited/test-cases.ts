import { Awaited } from './template'

type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]

//My Example
const correctAwaited: Awaited<Promise<{ name: string }>> = { name: 'Diana' };
