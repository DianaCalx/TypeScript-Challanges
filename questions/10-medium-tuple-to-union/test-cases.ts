import { TupleToUnion } from './template'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

//My Example
const correctTupleUnion: TupleToUnion<['apple',2.50, false]> = 'apple';