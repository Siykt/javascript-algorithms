import { lengthOfLongestSubstring } from './lengthOfLongestSubstring'

describe('3. 无重复字符的最长子串', () => {
  test('abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })
  test('bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })
  test('pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})
