/**
 * 2404. 出现最频繁的偶数元素
 * @param nums 整数数组
 */
export function mostFrequentEvenElement(nums: number[]): number {
  // hash计数表
  const hash = new Map<number, number>()
  for (const n of nums) {
    if ((n & 1) === 0) {
      hash.set(n, (hash.get(n) ?? 0) + 1)
    }
  }
  // 检索最小索引
  let min = -1
  let maxCount = 0
  for (const [n, count] of hash) {
    if (count > maxCount || (count === maxCount && min > n)) {
      min = n
      maxCount = count
    }
  }
  return min
}
