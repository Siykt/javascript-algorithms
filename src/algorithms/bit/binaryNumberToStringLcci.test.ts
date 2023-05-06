import { binaryNumberToStringLcci } from './binaryNumberToStringLcci'

describe('面试题 05.02. 二进制数转字符串', () => {
  test('0.625', () => {
    expect(binaryNumberToStringLcci(0.625)).toBe('0.101')
  }, 300)

  test('0.1', () => {
    expect(binaryNumberToStringLcci(0.1)).toBe('ERROR')
  }, 300)
})
