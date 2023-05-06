import { longestCommonPrefix } from './longestCommonPrefix'

describe('14. 最长公共前缀', () => {
  test('["", "b"]', () => {
    expect(longestCommonPrefix(['', 'b'])).toBe('')
  })

  test('["flower", "flow", "flight"]', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })

  test('["dog", "racecar", "car"]', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })

  test('["a"]', () => {
    expect(longestCommonPrefix(['a'])).toBe('a')
  })
})
