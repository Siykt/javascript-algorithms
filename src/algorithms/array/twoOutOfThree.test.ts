import { twoOutOfThree } from './twoOutOfThree'

describe('至少在两个数组中出现的值', () => {
  test('[1, 1, 3, 2], [2, 3], [3]', () => {
    expect(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])).toEqual(expect.arrayContaining([3, 2]))
  })

  test('[3, 1], [2, 3], [1, 2]', () => {
    expect(twoOutOfThree([3, 1], [2, 3], [1, 2])).toEqual(expect.arrayContaining([2, 3, 1]))
  })

  test('[1, 2, 2], [4, 3, 3], [5]', () => {
    expect(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])).toHaveLength(0)
  })
})
