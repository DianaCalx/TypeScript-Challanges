import { GetRequired } from './template'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >,
]

//My example
interface interfaceEqual {
  name: string,
  lastname: string,
  cellphone?: string,
}
const correctEqual: GetRequired<interfaceEqual> = {
  name: 'Diana',
  lastname: 'Calderon'
}