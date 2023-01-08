/**
 * 两数之和
 * @param nums 数字数组
 * @param target 目标值
 */
export function twoSum(nums: number[], target: number): number[] {
  const dict: Record<number, number> = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const n = nums[i]
    const sub = target - n
    // hash查询
    if (sub in dict) {
      return [dict[sub], i]
    }
    dict[n] = i
  }
  return []
}
