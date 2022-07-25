import { HelloWorld } from './template'

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]

//My example
const valueString: NotAny<'hola'> = true;