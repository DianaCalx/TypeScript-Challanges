export type AnyOf<T extends readonly any[]> = T[number] extends (0 | '' | false | [] | Record<string, never>) ? false : true; 
