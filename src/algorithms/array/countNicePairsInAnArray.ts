/**
 * 1814. 统计一个数组中好对子的数目
 * @param nums 数组
 */
export function countNicePairsInAnArray(nums: number[]): number {
  // 思路: 变换 + hash
  // nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
  // 可变换为: nums[i] - rev(nums[j]) == nums[j] - rev(nums[i])
  // 同样思路可得: nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
  // 即求出所有的 x - rev(x) 相等的数量
  // 记录数量可以使用 hash

  const MOD = 1000000007
  const hash: Record<number, number> = {}
  let ans = 0
  for (const x of nums) {
    // 反转整数
    let temp = x
    let rx = 0
    while (temp) {
      rx = rx * 10 + (temp % 10)
      temp = Math.floor(temp / 10)
    }
    const key = x - rx
    // 累加至答案
    ans = (ans + (hash[key] || 0)) % MOD
    // 暂存值hash表
    hash[key] = (hash[key] || 0) + 1
  }
  return ans
}
