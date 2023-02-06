/**
 * 46. 全排列
 * @param nums 数组
 */
export function permute(nums: number[]): number[][] {
  // 回溯
  const ans: number[][] = []
  // 当前数字的遍历状态
  const len = nums.length
  const dfs = (start = 0) => {
    // 退出条件即为nums的长度
    if (start === len) {
      ans.push(nums.slice())
      return
    }
    // 交换数组, 边界为当前开始值
    for (let i = start; i < len; i++) {
      ;[nums[i], nums[start]] = [nums[start], nums[i]]
      // 继续迭代
      dfs(start + 1)
      // 清除状态
      ;[nums[i], nums[start]] = [nums[start], nums[i]]
    }
  }
  dfs()
  return ans
}
