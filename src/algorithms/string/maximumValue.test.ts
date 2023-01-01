import { maximumValue } from './maximumValue'

describe('数组中字符串的最大值', () => {
  test('["a", "ab", "abc"]', () => {
    expect(maximumValue(['a', 'ab', 'abc'])).toBe(3)
  })

  test('["a", "2", "0"]', () => {
    expect(maximumValue(['a', '2', '0'])).toBe(2)
  })

  test("[('alic3', 'bob', '3', '4', '000000')]", () => {
    expect(maximumValue(['alic3', 'bob', '3', '4', '000000'])).toBe(5)
  })
})
