export function leaveKeysInObject<T, K extends keyof T>(ob: T, leaveKeys: Array<K>): Pick<T, K> {
  const obCopy = {} as Pick<T, K>

  leaveKeys.forEach((key) => {
    obCopy[key] = ob[key]
  })

  return obCopy
}
