export type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;

