import { findMinimumInRotatedSortedArray } from './findMinimumInRotatedSortedArray'

describe('153. 寻找旋转排序数组中的最小值', () => {
  test('nums = [3,4,5,1,2]', () => {
    expect(findMinimumInRotatedSortedArray([3, 4, 5, 1, 2])).toBe(1)
  }, 300)

  test('nums = [4,5,6,7,0,1,2]', () => {
    expect(findMinimumInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toBe(0)
  }, 300)

  test('nums = [11,13,15,17]', () => {
    expect(findMinimumInRotatedSortedArray([11, 13, 15, 17])).toBe(11)
  }, 300)

  test('nums = [1,2]', () => {
    expect(findMinimumInRotatedSortedArray([1, 2])).toBe(1)
  }, 300)
})
