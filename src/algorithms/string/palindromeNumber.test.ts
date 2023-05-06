import {
  isPalindromeByDoublePoint,
  isPalindromeByRevertedNumber,
  isPalindromeByRevertedString,
} from './palindromeNumber'

const testMap = [121, -121, 10, 0, 1, 12321, 123321, 1234321, 123454321]
const resultMap = [true, false, false, true, true, true, true, true, true]

describe('回文数', () => {
  test('反转数字版本', () => {
    testMap.forEach((item, i) => {
      expect(isPalindromeByRevertedNumber(item)).toBe(resultMap[i])
    })
  })

  test('反转字符串版本', () => {
    testMap.forEach((item, i) => {
      expect(isPalindromeByRevertedString(item)).toBe(resultMap[i])
    })
  })

  test('双指针版本', () => {
    testMap.forEach((item, i) => {
      expect(isPalindromeByDoublePoint(item)).toBe(resultMap[i])
    })
  })
})
