/**
 * 2293. 极大极小游戏
 * @param nums 整数数组
 */
export function minMaxGame(nums: number[]): number {
  // 思路: 递归
  if (nums.length === 1) return nums[0]
  const newNums: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (Math.floor(i / 2) % 2) {
      newNums.push(Math.max(nums[i], nums[++i]))
    } else {
      newNums.push(Math.min(nums[i], nums[++i]))
    }
  }
  return minMaxGame(newNums)
}
