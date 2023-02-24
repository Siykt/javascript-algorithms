import { minimumSwapsToMakeStringsEqual } from './minimumSwapsToMakeStringsEqual'

describe('1247. 交换字符使得字符串相同', () => {
  test('s1 = "xx", s2 = "yy"', () => {
    expect(minimumSwapsToMakeStringsEqual('xx', 'yy')).toBe(1)
  }, 300)

  test('s1 = "xy", s2 = "yx"', () => {
    expect(minimumSwapsToMakeStringsEqual('xy', 'yx')).toBe(2)
  }, 300)

  test('s1 = "xx", s2 = "xy"', () => {
    expect(minimumSwapsToMakeStringsEqual('xx', 'xy')).toBe(-1)
  }, 300)
})
