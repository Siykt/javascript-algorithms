/**
 * 121. 买卖股票的最佳时机
 * @param prices 数组
 */
export function bestTimeToBuyAndSellStock(prices: number[]): number {
  let res = 0
  let buy = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    // 如果当天的价格小于之前买的价格
    // 即降价了, 所以应当直接购买
    if (price < buy) {
      buy = price
    } else {
      // 否则获取最大差价
      res = Math.max(price - buy, res)
    }
  }
  return res
}
