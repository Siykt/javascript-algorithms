import { maximumSubarray } from './maximumSubarray'

describe('最大子数组和', () => {
  test('[-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  test('[1]', () => {
    expect(maximumSubarray([1])).toBe(1)
  })

  test('[5,4,-1,7,8]', () => {
    expect(maximumSubarray([5, 4, -1, 7, 8])).toBe(23)
  })
})
