import { binaryNumberToString } from './binaryNumberToString'

describe('面试题 05.02. 二进制数转字符串', () => {
  test('0.625', () => {
    expect(binaryNumberToString(0.625)).toBe('0.101')
  }, 300)

  test('0.1', () => {
    expect(binaryNumberToString(0.1)).toBe('ERROR')
  }, 300)
})
