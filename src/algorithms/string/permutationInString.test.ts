import { permutationInString } from './permutationInString'

describe('567. 字符串的排列', () => {
  test('s1 = "ab" s2 = "eidbaooo"', () => {
    expect(permutationInString('ab', 'eidbaooo')).toBe(true)
  })

  test('s1 = "ab" s2 = "eidboaoo"', () => {
    expect(permutationInString('ab', 'eidboaoo')).toBe(false)
  })

  test('s1 = "abcdefg", s1 = "a"', () => {
    expect(permutationInString('abcdefg', 'a')).toBe(false)
  })
})
