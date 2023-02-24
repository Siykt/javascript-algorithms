/**
 * 2357. 使数组中所有元素都等于零
 * @param nums 非负整数数组
 */
export function minimumOperations(nums: number[]): number {
  // 计算正整数数量
  const hash = new Set(nums)
  hash.delete(0)
  return hash.size
}
