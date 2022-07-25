import { GetOptional } from './template'

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<
    Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>
  >,
]

//My example
interface interfaceOptional {
  name: string,
  lastname: string,
  cellphone?: string,
}
const correctOptional: GetOptional<interfaceOptional> = {
  cellphone: '7712-7897'
}