import { TupleToObject } from './template'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,
]

// My Example
const correctUse: TupleToObject<['name', 'lastname', 1]> = {
  name: 'name',
  lastname: 'lastname',
  1: 1
}