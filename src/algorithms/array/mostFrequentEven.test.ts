import { mostFrequentEvenElement } from './mostFrequentEvenElement'

describe('2404. 出现最频繁的偶数元素', () => {
  test('nums = [0,1,2,2,4,4,1]', () => {
    expect(mostFrequentEvenElement([0, 1, 2, 2, 4, 4, 1])).toBe(2)
  })

  test('nums = [4,4,4,9,2,4]', () => {
    expect(mostFrequentEvenElement([4, 4, 4, 9, 2, 4])).toBe(4)
  })

  test('nums = [29,47,21,41,13,37,25,7]', () => {
    expect(mostFrequentEvenElement([29, 47, 21, 41, 13, 37, 25, 7])).toBe(-1)
  })
})
