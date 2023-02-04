/**
 * 1798. 你能构造出连续值的最大数目
 * @param coins 硬币数组
 */
export function maximumNumberOfConsecutiveValuesYouCanMake(coins: number[]): number {
  // 贪心
  let ans = 1
  coins.sort((a, b) => a - b)
  for (const n of coins) {
    // 当元素大于之前合集时, 即无法构造出下一个可用值, 此时退出即可
    if (n > ans) return ans
    ans += n
  }
  return ans
}
