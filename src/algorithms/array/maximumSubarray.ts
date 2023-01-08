/**
 * 最大子数组和
 * @param nums 数组
 */
export function maximumSubarray(nums: number[]): number {
  const len = nums.length
  let res = nums[0]
  let sum = 0
  // 暴力AC
  for (let i = 0; i < len; i++) {
    const cur = nums[i]
    if (sum > 0) {
      sum += cur
    } else {
      sum = cur
    }
    res = Math.max(res, sum)
  }
  return res
}
