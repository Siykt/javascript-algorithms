import { countIntegersWithEvenDigitSum } from './countIntegersWithEvenDigitSum'

describe('统计各位数字之和为偶数的整数个数', () => {
  test('13', () => {
    expect(countIntegersWithEvenDigitSum(13)).toBe(6)
  })

  test('3', () => {
    expect(countIntegersWithEvenDigitSum(3)).toBe(1)
  })

  test('23', () => {
    expect(countIntegersWithEvenDigitSum(23)).toBe(11)
  })

  test('910', () => {
    expect(countIntegersWithEvenDigitSum(910)).toBe(455)
  })
})
