import { romanToInteger } from './romanToInteger'

describe('罗马数字转整数', () => {
  test('III', () => {
    expect(romanToInteger('III')).toBe(3)
  })

  test('LVIII', () => {
    expect(romanToInteger('LVIII')).toBe(58)
  })

  test('MCMXCIV', () => {
    expect(romanToInteger('MCMXCIV')).toBe(1994)
  })

  test('XLIX', () => {
    expect(romanToInteger('XLIX')).toBe(49)
  })

  test('CMXCIX', () => {
    expect(romanToInteger('CMXCIX')).toBe(999)
  })
})
