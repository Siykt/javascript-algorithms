import { getSmallestString } from './getSmallestString'

describe('1663. 具有给定数值的最小字符串', () => {
  test('n = 3, k = 27', () => {
    expect(getSmallestString(3, 27)).toBe('aay')
  }, 300)

  test('n = 5, k = 73', () => {
    expect(getSmallestString(5, 73)).toBe('aaszz')
  }, 300)
})
