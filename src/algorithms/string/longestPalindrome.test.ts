import { longestPalindromeByExpandAroundCenter } from './longestPalindrome'

describe('5. 最长回文子串', () => {
  test('babad', () => {
    expect(longestPalindromeByExpandAroundCenter('babad')).toBe('bab')
  })

  test('cbbd', () => {
    expect(longestPalindromeByExpandAroundCenter('cbbd')).toBe('bb')
  })
})
