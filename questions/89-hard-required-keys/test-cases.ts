import { RequiredKeys } from './template'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<
    Equal<
      RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      'a' | 'c' | 'd'
    >
  >,
  Expect<Equal<RequiredKeys<{}>, never>>,
]

//My example 
interface interfaceKeys {
  name: string,
  lastname: string,
  cellphone?: string,
}
const correctRequiredKeys: RequiredKeys<interfaceKeys> = 'name';