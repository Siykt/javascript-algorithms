import { reverseIntegerByStringReverse } from './reverseInteger'

describe('整数反转 转字符串暴力反转', () => {
  test('123', () => {
    expect(reverseIntegerByStringReverse(123)).toBe(321)
  })

  test('-123', () => {
    expect(reverseIntegerByStringReverse(-123)).toBe(-321)
  })

  test('120', () => {
    expect(reverseIntegerByStringReverse(120)).toBe(21)
  })

  test('123123123123', () => {
    expect(reverseIntegerByStringReverse(123123123123)).toBe(0)
  })

  test('-123123123123', () => {
    expect(reverseIntegerByStringReverse(-123123123123)).toBe(0)
  })
})
