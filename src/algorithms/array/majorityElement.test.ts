import { majorityElement } from './majorityElement'

describe('169. 多数元素', () => {
  test('nums = [3,2,3]', () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
  }, 300)

  test('nums = [2,2,1,1,1,2,2]', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  }, 300)
})
