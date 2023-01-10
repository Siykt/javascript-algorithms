import { checkIfNumberHasEqualDigitCountAndDigitValue } from './checkIfNumberHasEqualDigitCountAndDigitValue'

describe('2283. 判断一个数的数字计数是否等于数位的值', () => {
  test('num = "1210"', () => {
    expect(checkIfNumberHasEqualDigitCountAndDigitValue('1210')).toBe(true)
  })

  test('num = "030"', () => {
    expect(checkIfNumberHasEqualDigitCountAndDigitValue('030')).toBe(false)
  })
})
