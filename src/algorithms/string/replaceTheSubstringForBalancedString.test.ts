import { replaceTheSubstringForBalancedString } from './replaceTheSubstringForBalancedString'

describe('1234. 替换子串得到平衡字符串', () => {
  test('s = "QWER"', () => {
    expect(replaceTheSubstringForBalancedString('QWER')).toBe(0)
  }, 300)

  test('s = "QQWE"', () => {
    expect(replaceTheSubstringForBalancedString('QQWE')).toBe(1)
  }, 300)

  test('s = "QQQW"', () => {
    expect(replaceTheSubstringForBalancedString('QQQW')).toBe(2)
  }, 300)

  test('s = "QQQQ"', () => {
    expect(replaceTheSubstringForBalancedString('QQQQ')).toBe(3)
  }, 300)
})
