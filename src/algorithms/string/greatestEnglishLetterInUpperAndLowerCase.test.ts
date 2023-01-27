import { greatestEnglishLetterInUpperAndLowerCase } from './greatestEnglishLetterInUpperAndLowerCase'

describe('2309. 兼具大小写的最好英文字母', () => {
  test('s = "lEeTcOdE"', () => {
    expect(greatestEnglishLetterInUpperAndLowerCase('lEeTcOdE')).toBe('E')
  }, 300)

  test('s = "arRAzFif"', () => {
    expect(greatestEnglishLetterInUpperAndLowerCase('arRAzFif')).toBe('R')
  }, 300)

  test('s = "AbCdEfGhIjK"', () => {
    expect(greatestEnglishLetterInUpperAndLowerCase('AbCdEfGhIjK')).toBe('')
  }, 300)
})
