import { searchInRotatedSortedArray } from './searchInRotatedSortedArray'

describe('33. 搜索旋转排序数组', () => {
  test('nums = [4,5,6,7,0,1,2], target = 0', () => {
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  }, 300)

  test('nums = [4,5,6,7,0,1,2], target = 3', () => {
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  }, 300)

  test('nums = [1], target = 0', () => {
    expect(searchInRotatedSortedArray([1], 0)).toBe(-1)
  }, 300)
})
