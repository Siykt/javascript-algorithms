import { mergeSortedArrayByInsertAndSort } from './mergeSortedArray'

describe('合并两个有序数组 Insert + Sort', () => {
  test('nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
    expect(mergeSortedArrayByInsertAndSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6])
  })

  test('nums1 = [1], m = 1, nums2 = [], n = 0', () => {
    expect(mergeSortedArrayByInsertAndSort([1], 1, [], 0)).toEqual([1])
  })

  test('nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
    expect(mergeSortedArrayByInsertAndSort([0], 0, [1], 1)).toEqual([1])
  })
})
