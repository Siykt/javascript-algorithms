import { searchInsertPosition } from './searchInsertPosition'

describe('35. 搜索插入位置', () => {
  test('nums = [1,3,5,6], target = 5', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).toBe(2)
  })

  test('nums = [1,3,5,6], target = 2', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 2)).toBe(1)
  })

  test('nums = [1,3,5,6], target = 7', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4)
  })
})
