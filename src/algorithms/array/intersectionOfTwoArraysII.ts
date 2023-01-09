/**
 * 350. 两个数组的交集 II
 * @param nums1 数组1
 * @param nums2 数组2
 */
export function intersectionOfTwoArraysIIByHashmap(nums1: number[], nums2: number[]): number[] {
  const hash1: Record<number, number> = {}
  const hash2: Record<number, number> = {}
  // 更小的数组遍历结束后即可退出
  for (const n1 of nums1) {
    hash1[n1] = (hash1[n1] || 0) + 1
  }
  for (const n2 of nums2) {
    hash2[n2] = (hash2[n2] || 0) + 1
  }
  const res: number[] = []
  for (const key in hash1) {
    // 排除无重复key
    if (!(key in hash2)) continue
    const n1 = hash1[key]
    const n2 = hash2[key]
    res.push(...Array(Math.min(+n1, +n2)).fill(+key))
  }
  return res
}

export function intersectionOfTwoArraysIIByPrefectHashmap(nums1: number[], nums2: number[]): number[] {
  const hash: Record<number, number> = {}
  // 设置重复hash表
  for (const n1 of nums1) {
    hash[n1] = (hash[n1] || 0) + 1
  }
  const res: number[] = []
  for (const n2 of nums2) {
    // 直接与0比较更快
    if (hash[n2] > 0) {
      res.push(n2)
      // 递减hashmap
      hash[n2] -= 1
    }
  }
  return res
}
