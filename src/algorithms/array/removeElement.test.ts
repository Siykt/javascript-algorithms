import { removeElement } from './removeElement'

describe('27. 移除元素', () => {
  test('nums = [3,2,2,3], val = 3 ', () => {
    const arr = [3, 2, 2, 3]
    expect(removeElement(arr, 3)).toBe(2)
    expect(arr).toEqual(expect.arrayContaining([2, 2]))
  })

  test('nums = [0,1,2,2,3,0,4,2], val = 2', () => {
    const arr = [0, 1, 2, 2, 3, 0, 4, 2]
    expect(removeElement(arr, 2)).toBe(5)
    expect(arr).toEqual(expect.arrayContaining([0, 1, 3, 0, 4]))
  })
})
