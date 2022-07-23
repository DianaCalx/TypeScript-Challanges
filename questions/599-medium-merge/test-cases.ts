import { Merge } from './template'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
      }
    >
  >,
]

//My example 
type Person =  {
  firstName: string
}

type Company =  {
  companyName: string
}

const Employee:Merge<Person,Company> = {
  firstName: 'Diana',
  companyName: 'Ravn'
} 