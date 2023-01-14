import { findFirstAndLastPositionOfElementInSortedArray } from './findFirstAndLastPositionOfElementInSortedArray'

describe('34. 在排序数组中查找元素的第一个和最后一个位置', () => {
  test('nums = [5,7,7,8,8,10], target = 8', () => {
    expect(findFirstAndLastPositionOfElementInSortedArray([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
  })

  test('nums = [5,7,7,8,8,10], target = 6', () => {
    expect(findFirstAndLastPositionOfElementInSortedArray([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
  })

  test('nums = [], target = 0', () => {
    expect(findFirstAndLastPositionOfElementInSortedArray([], 0)).toEqual([-1, -1])
  })
})
