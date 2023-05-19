/**
 * 27. 移除元素
 * @param nums 数组
 * @param val 值
 */
export function removeElement(nums: number[], val: number): number {
  // 双指针
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // 从头覆盖
      nums[ans++] = nums[i]
    }
  }
  return ans
}
