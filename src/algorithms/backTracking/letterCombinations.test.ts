import { letterCombinations } from './letterCombinations'

describe('17. 电话号码的字母组合', () => {
  test('digits = "23"', () => {
    expect(letterCombinations('23')).toEqual(
      expect.arrayContaining(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']),
    )
  })

  test('digits = ""', () => {
    expect(letterCombinations('')).toEqual([])
  })

  test('digits = "2"', () => {
    expect(letterCombinations('2')).toEqual(expect.arrayContaining(['a', 'b', 'c']))
  })
})
