const CODE = 'abcdefghijklmnopqrstuvwxyz'

/**
 * 1663. 具有给定数值的最小字符串
 * @param n 长度
 * @param k 总和
 */
export function getSmallestString(n: number, k: number): string {
  // 思路: 贪心
  // 先设置 n 个 a, 再暴力替换直至等于 k

  k -= n--
  let ans = 0
  while (k > 25) {
    // 设置终端为 z, 并向前推进指针
    ans++
    k -= 25
    n--
  }
  // 最终补偿
  return 'a'.repeat(n) + CODE[k] + 'z'.repeat(ans)
}
