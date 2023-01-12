import { firstUniqueCharacterInAString } from './firstUniqueCharacterInAString'

describe('387. 字符串中的第一个唯一字符', () => {
  test('s = "leetcode"', () => {
    expect(firstUniqueCharacterInAString('leetcode')).toBe(0)
  })

  test('s = "loveleetcode"', () => {
    expect(firstUniqueCharacterInAString('loveleetcode')).toBe(2)
  })

  test('s = "aabb"', () => {
    expect(firstUniqueCharacterInAString('aabb')).toBe(-1)
  })
})
