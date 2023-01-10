import { binarySearch } from './binarySearch'

describe('二分查找', () => {
  test('nums = [-1,0,3,5,9,12], target = 9', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })

  test('nums = [-1,0,3,5,9,12], target = 2', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })
})
