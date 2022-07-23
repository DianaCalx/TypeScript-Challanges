import { MyReadonly } from './template'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
}

// My example
const objectReadOnly: MyReadonly<Todo1> = {
  title: 'Fantasy',
  description: 'Once Upon a Time',
  completed: true,
}