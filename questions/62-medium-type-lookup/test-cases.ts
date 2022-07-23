import { LookUp } from './template'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]

// Example
interface Car {
  type: 'nissan'
  color: 'blue' | 'white'
  year: '2017' | '2018'
}

interface Motorcycle {
  type: 'honda'
  color: 'black'
}

const correctLookUp: LookUp<Car | Motorcycle, 'nissan'> = {
  type: 'nissan',
  color: 'blue',
  year: '2018'
}
