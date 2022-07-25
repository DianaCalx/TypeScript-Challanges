import { OptionalKeys } from './template'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<
    Equal<
      OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
      'b' | 'c' | 'd'
    >
  >,
  Expect<Equal<OptionalKeys<{}>, never>>,
]

//My example
interface interfaceKeys {
  name: string,
  lastname: string,
  cellphone?: string,
}
const correctRequiredKeys: OptionalKeys<interfaceKeys> = 'cellphone';