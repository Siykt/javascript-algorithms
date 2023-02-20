const HAND_TYPE_MAP = ['', 'High Card', 'Pair', 'Three of a Kind']

/**
 * 2347. 最好的扑克手牌
 * @param ranks 整数数组
 * @param suits 花色
 */
export function bestPokerHand(ranks: number[], suits: string[]): string {
  // 模拟 + hash
  // 检查花色
  const first = suits.pop() as string
  if (suits.every((suit) => suit === first)) return 'Flush'

  // 检查牌型
  const hash = Array(13).fill(0)
  for (const rank of ranks) {
    hash[rank - 1]++
  }
  return HAND_TYPE_MAP[Math.min(Math.max(...hash), 3)]
}
