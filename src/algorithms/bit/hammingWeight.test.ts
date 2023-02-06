import { hammingWeight } from './hammingWeight'

describe('191. 位1的个数', () => {
  test('0b00000000000000000000000000001011', () => {
    expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3)
  }, 300)

  test('0b00000000000000000000000010000000', () => {
    expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1)
  }, 300)

  test('0b11111111111111111111111111111101', () => {
    expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31)
  }, 300)
})
