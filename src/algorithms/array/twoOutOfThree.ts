/**
 * 2032. 至少在两个数组中出现的值
 * @param nums1 数组1
 * @param nums2 数组2
 * @param nums3 数组3
 */
export function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const dict: Record<string, number> = {}
  const res: number[] = []
  // 使用二进制 001 010 100 来表示其是否出现
  for (const n of nums1) dict[n] |= 1
  for (const n of nums2) dict[n] |= 2
  for (const n of nums3) dict[n] |= 4
  for (const k in dict) {
    const n = dict[k]
    // 有效二进制: 101 110 111
    // 它们 - 1 都不为 0
    if (n & (n - 1)) res.push(+k)
  }
  return res
}
