import { bestTimeToBuyAndSellStock } from './bestTimeToBuyAndSellStock'

describe('121. 买卖股票的最佳时机', () => {
  test('[7,1,5,3,6,4]', () => {
    expect(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  test('[7,6,4,3,1]', () => {
    expect(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toBe(0)
  })
})
