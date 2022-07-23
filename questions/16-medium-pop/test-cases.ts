import { Pop } from './template'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]

//My Example
const correctPop: Pop<['aqua','green','red']> = ['aqua','green'];