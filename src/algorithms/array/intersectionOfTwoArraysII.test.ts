import {
  intersectionOfTwoArraysIIByHashmap,
  intersectionOfTwoArraysIIByPrefectHashmap,
} from './intersectionOfTwoArraysII'

describe('两个数组的交集 II', () => {
  test('nums1 = [1,2,2,1], nums2 = [2,2]', () => {
    expect(intersectionOfTwoArraysIIByHashmap([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
  })

  test('nums1 = [4,9,5], nums2 = [9,4,9,8,4]', () => {
    expect(intersectionOfTwoArraysIIByHashmap([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(expect.arrayContaining([4, 9]))
  })
})

describe('两个数组的交集 II PrefectHashmap', () => {
  test('nums1 = [1,2,2,1], nums2 = [2,2]', () => {
    expect(intersectionOfTwoArraysIIByPrefectHashmap([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
  })

  test('nums1 = [4,9,5], nums2 = [9,4,9,8,4]', () => {
    expect(intersectionOfTwoArraysIIByPrefectHashmap([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(
      expect.arrayContaining([4, 9]),
    )
  })
})
