/**
 * 191. 位 1 的个数
 * @param n 数
 */
export function hammingWeight(n: number): number {
  // 位运算
  let ans = 0
  while (n) {
    ans++
    // 与等于自身 -1 即为减去一个1
    n &= n - 1
  }
  return ans
}
