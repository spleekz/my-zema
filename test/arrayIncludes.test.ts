import { arrayIncludes } from '../src/utils/arrayIncludes'

test('should be true if first array includes elements from second array', () => {
  const arr1 = ['value3', 'value4', 'value1', 'value2']
  const arr2 = ['value1', 'value2']

  const result = arrayIncludes(arr1, arr2)

  expect(result).toBe(true)
})

test('should be false if first array does not includes elements from second array', () => {
  const arr1 = ['value1', 'value2']
  const arr2 = ['value1', 'value3']

  const result = arrayIncludes(arr1, arr2)

  expect(result).toBe(false)
})
