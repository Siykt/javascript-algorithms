import { minimumOperations } from './minimumOperations'

describe('2357. 使数组中所有元素都等于零', () => {
  test('nums = [1,5,0,3,5]', () => {
    expect(minimumOperations([1, 5, 0, 3, 5])).toBe(3)
  }, 300)

  test('nums = [0]', () => {
    expect(minimumOperations([0])).toBe(0)
  }, 300)
})
