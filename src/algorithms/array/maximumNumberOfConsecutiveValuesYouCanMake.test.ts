import { maximumNumberOfConsecutiveValuesYouCanMake } from './maximumNumberOfConsecutiveValuesYouCanMake'

describe('1798. 你能构造出连续值的最大数目', () => {
  test('coins = [1,3]', () => {
    expect(maximumNumberOfConsecutiveValuesYouCanMake([1, 3])).toBe(2)
  }, 300)

  test('coins = [1,1,1,4]', () => {
    expect(maximumNumberOfConsecutiveValuesYouCanMake([1, 1, 1, 4])).toBe(8)
  }, 300)

  test('nums = [1,4,10,3,1]', () => {
    expect(maximumNumberOfConsecutiveValuesYouCanMake([1, 4, 10, 3, 1])).toBe(20)
  }, 300)
})
