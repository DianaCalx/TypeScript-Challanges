import { DeepReadonly } from './template'

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}

//Example 
type Type = {
  title: string,
  description: string,
  completed: boolean,
  features: {
    size: string,
    color: string
  }
}

const readOnly: DeepReadonly<Type> = {
  title: 'History',
  description: 'A short description',
  completed: false,
  features: {
    size: 'big',
    color: 'red'
  }
}