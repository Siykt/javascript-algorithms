import { kthMissingPositiveNumberByAC } from './kthMissingPositiveNumber'

describe('1539. 第 k 个缺失的正整数 遍历', () => {
  test('arr = [2,3,4,7,11], k = 5', () => {
    expect(kthMissingPositiveNumberByAC([2, 3, 4, 7, 11], 5)).toBe(9)
  }, 200)

  test('arr = [1,2,3,4], k = 2', () => {
    expect(kthMissingPositiveNumberByAC([1, 2, 3, 4], 2)).toBe(6)
  }, 200)
})
