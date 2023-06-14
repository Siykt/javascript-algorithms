import { findPeakElement } from './findPeakElement'

describe('162. 寻找峰值', () => {
  test('nums = [1,2,3,1]', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2)
  }, 300)

  test('nums = [1,2,1,3,5,6,4]', () => {
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4]).toString()).toMatch(/1|5/)
  }, 300)
})
