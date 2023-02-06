/**
 * 977. 有序数组的平方
 * @param nums 数组
 */
export function sortedSquares(nums: number[]): number[] {
  // 双指针
  const len = nums.length
  let l = 0
  let r = len - 1
  const ans: number[] = []
  while (l <= r) {
    // 当左侧更大时推进左指针并入栈顶
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      ans.unshift(nums[l] * nums[l++])
    } else {
      // 否则推进右侧指针
      ans.unshift(nums[r] * nums[r--])
    }
  }
  return ans
}
