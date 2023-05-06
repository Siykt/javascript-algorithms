import { medianOfTwoSortedArrays } from './medianOfTwoSortedArrays'

describe('寻找两个正序数组的中位数', () => {
  test('[1, 3], [2]', () => {
    expect(medianOfTwoSortedArrays([1, 3], [2])).toBe(2.0)
  })

  test('[3], [-2,-1]', () => {
    expect(medianOfTwoSortedArrays([3], [-2, -1])).toBe(-1)
  })
})
