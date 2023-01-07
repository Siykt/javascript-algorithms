/**
 * 217. 存在重复元素
 * @param nums 数字数组
 */
export function containsDuplicate(nums: number[]): boolean {
  // 记录重复值hash
  const hash: Record<number, 1> = {}
  for (const n of nums) {
    if (hash[n]) return true
    hash[n] = 1
  }
  return false
}
