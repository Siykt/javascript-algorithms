import { findMedianSortedArrays } from './findMedianSortedArrays'

describe('寻找两个正序数组的中位数', () => {
  test('[1, 3], [2]', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0)
  })

  test('[3], [-2,-1]', () => {
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1)
  })
})
