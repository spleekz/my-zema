import { IHashValues } from '../App'

export const getHashValues = (hash: string): IHashValues => {
  const hashString = hash.substring(1)
  const hashValuesArray = hashString.split('&')
  const hashValues: IHashValues = hashValuesArray.reduce((acc: IHashValues, current) => {
    const keyAndValue = current.split('=')
    const key = keyAndValue[0] as keyof IHashValues
    const value = keyAndValue[1]
    acc[key] = value
    return acc
  }, {} as IHashValues)

  return hashValues
}
