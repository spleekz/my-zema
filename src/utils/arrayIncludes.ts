export function arrayIncludes<T>(array1: Array<T>, array2: Array<T>): boolean {
  return array2.every((el) => array1.includes(el))
}
