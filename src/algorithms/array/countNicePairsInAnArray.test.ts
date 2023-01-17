import { countNicePairsInAnArray } from './countNicePairsInAnArray'

describe('1814. 统计一个数组中好对子的数目', () => {
  test('nums = [42,11,1,97]', () => {
    expect(countNicePairsInAnArray([42, 11, 1, 97])).toBe(2)
  })

  test('nums = [13,10,35,24,76]', () => {
    expect(countNicePairsInAnArray([13, 10, 35, 24, 76])).toBe(4)
  })
})
