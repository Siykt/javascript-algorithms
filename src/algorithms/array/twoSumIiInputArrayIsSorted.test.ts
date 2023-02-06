import { twoSumIiInputArrayIsSorted } from './twoSumIiInputArrayIsSorted'

describe('167. 两数之和 II - 输入有序数组', () => {
  test('numbers = [2,7,11,15], target = 9', () => {
    expect(twoSumIiInputArrayIsSorted([2, 7, 11, 15], 9)).toEqual([1, 2])
  }, 300)

  test('numbers = [2,3,4], target = 6', () => {
    expect(twoSumIiInputArrayIsSorted([2, 3, 4], 6)).toEqual([1, 3])
  }, 300)

  test('numbers = [-1,0], target = -1', () => {
    expect(twoSumIiInputArrayIsSorted([-1, 0], -1)).toEqual([1, 2])
  }, 300)
})
