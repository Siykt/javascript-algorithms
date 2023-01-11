import { rotateArrayBySplice } from './rotateArray'

describe('189. 轮转数组 拼接数组', () => {
  test('nums = [-1,-100,3,99], k = 2', () => {
    const nums = [-1, -100, 3, 99]
    rotateArrayBySplice(nums, 2)
    expect(nums).toEqual([3, 99, -1, -100])
  })

  test('nums = [1,2,3,4,5,6,7], k = 3', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    rotateArrayBySplice(nums, 3)
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
})
