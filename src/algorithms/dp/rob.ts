/**
 * 198. 打家劫舍
 * @param nums 数组
 */
export function rob(nums: number[]): number {
  // DP
  // Base case: 0, nums[0]
  const len = nums.length
  if (!len) return 0
  // 定义子问题: n - 1的金额大还是n - 2的金额大
  // 状态: f(n) = max(f(n - 1), nums(n - 1) + f(n - 2))
  const dp = [0, nums[0]]
  // 需要考虑最后一位
  for (let n = 2; n <= len; n++) {
    // f(n) = max(f(n - 1), nums(n - 1) + f(n - 2))
    dp[n] = Math.max(dp[n - 1], nums[n - 1] + dp[n - 2])
  }
  return dp[len]
}
