import { romanToInt } from './romanToInt'

describe('罗马数字转整数', () => {
  test('III', () => {
    expect(romanToInt('III')).toBe(3)
  })

  test('LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58)
  })

  test('MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994)
  })

  test('XLIX', () => {
    expect(romanToInt('XLIX')).toBe(49)
  })

  test('CMXCIX', () => {
    expect(romanToInt('CMXCIX')).toBe(999)
  })
})
