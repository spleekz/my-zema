import { leaveKeysInObject } from '../src/utils/leaveKeysInObject'
test('only given keys should leave in object', () => {
  const object = {
    a: 1,
    b: 2,
    c: 4,
    d: 5,
  }
  const newObject = leaveKeysInObject(object, ['b', 'c'])

  expect(newObject).toStrictEqual({
    b: 2,
    c: 4,
  })
})
