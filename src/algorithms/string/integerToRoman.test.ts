import { intToRomanByGreedy, intToRomanByPoint } from './integerToRoman'

describe('整数转罗马数字 单指针', () => {
  test('III', () => {
    expect(intToRomanByPoint(3)).toBe('III')
  })

  test('LVIII', () => {
    expect(intToRomanByPoint(58)).toBe('LVIII')
  })

  test('MCMXCIV', () => {
    expect(intToRomanByPoint(1994)).toBe('MCMXCIV')
  })

  test('XLIX', () => {
    expect(intToRomanByPoint(49)).toBe('XLIX')
  })

  test('CMXCIX', () => {
    expect(intToRomanByPoint(999)).toBe('CMXCIX')
  })
})

describe('整数转罗马数字 单指针', () => {
  test('III', () => {
    expect(intToRomanByGreedy(3)).toBe('III')
  })

  test('LVIII', () => {
    expect(intToRomanByGreedy(58)).toBe('LVIII')
  })

  test('MCMXCIV', () => {
    expect(intToRomanByGreedy(1994)).toBe('MCMXCIV')
  })

  test('XLIX', () => {
    expect(intToRomanByGreedy(49)).toBe('XLIX')
  })

  test('CMXCIX', () => {
    expect(intToRomanByGreedy(999)).toBe('CMXCIX')
  })
})
