import { bestPokerHand } from './bestPokerHand'

describe('2347. 最好的扑克手牌', () => {
  test('ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]', () => {
    expect(bestPokerHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])).toBe('Flush')
  }, 300)

  test('ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]', () => {
    expect(bestPokerHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])).toBe('Three of a Kind')
  }, 300)

  test('ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]', () => {
    expect(bestPokerHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])).toBe('Pair')
  }, 300)
})
