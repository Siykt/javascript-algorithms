import { countingWordsWithAGivenPrefix } from './countingWordsWithAGivenPrefix'

describe('统计包含给定前缀的字符串', () => {
  test('words = ["pay","attention","practice","attend"], pref = "at"', () => {
    expect(countingWordsWithAGivenPrefix(['pay', 'attention', 'practice', 'attend'], 'at')).toBe(2)
  })

  test('words = ["leetcode","win","loops","success"], pref = "code"', () => {
    expect(countingWordsWithAGivenPrefix(['leetcode', 'win', 'loops', 'success'], 'code')).toBe(0)
  })
})
