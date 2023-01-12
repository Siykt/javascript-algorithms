import { validAnagramByAC, validAnagramByHash, validAnagramBySort } from './validAnagram'

describe('242. 有效的字母异位词 暴力AC', () => {
  test('s = "anagram", t = "nagaram"', () => {
    expect(validAnagramByAC('anagram', 'nagaram')).toBe(true)
  })

  test('s = "rat", t = "car"', () => {
    expect(validAnagramByAC('rat', 'car')).toBe(false)
  })
})

describe('242. 有效的字母异位词 hashmap', () => {
  test('s = "anagram", t = "nagaram"', () => {
    expect(validAnagramByHash('anagram', 'nagaram')).toBe(true)
  })

  test('s = "rat", t = "car"', () => {
    expect(validAnagramByHash('rat', 'car')).toBe(false)
  })
})

describe('242. 有效的字母异位词 排序', () => {
  test('s = "anagram", t = "nagaram"', () => {
    expect(validAnagramBySort('anagram', 'nagaram')).toBe(true)
  })

  test('s = "rat", t = "car"', () => {
    expect(validAnagramBySort('rat', 'car')).toBe(false)
  })
})
