/**
 * 1539. 第 k 个缺失的正整数
 * @param arr 严格升序排列 的正整数数组
 * @param k 缺失的正整数
 */
export function kthMissingPositiveNumberByAC(arr: number[], k: number): number {
  // 思路: 暴力模拟

  // 边界
  if (arr[0] > k) return k

  // 通过找到最小值来推导缺失数
  let min = 0
  for (const n of arr) {
    // 与上一位的差值并排除自己的位置
    k -= n - min - 1
    min = n
    if (k <= 0) break
  }
  k = k > 0 ? k : k - 1
  // 最后获得的数字排除自己的位置加上k的偏移
  return min + k
}
