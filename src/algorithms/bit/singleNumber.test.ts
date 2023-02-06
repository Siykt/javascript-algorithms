import { singleNumber } from './singleNumber'

describe('136. 只出现一次的数字', () => {
  test('nums = [2,2,1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
  }, 300)

  test('nums = [4,1,2,1,2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
  }, 300)

  test('nums = [1]', () => {
    expect(singleNumber([1])).toBe(1)
  }, 300)
})
