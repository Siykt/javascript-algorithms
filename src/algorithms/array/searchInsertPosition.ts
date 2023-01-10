/**
 * 35. 搜索插入位置
 * @param nums 有序数组
 * @param target 目标值
 */
export function searchInsertPosition(nums: number[], target: number): number {
  const len = nums.length
  // 左边界
  let left = 0
  // 右边界
  let right = len - 1
  while (left <= right) {
    // 取两个指针的中间值并加上 left 偏移
    const mid = left + Math.floor((right - left) / 2)
    const n = nums[mid]
    if (n === target) {
      return mid
    } else if (n > target) {
      // 大了查左, 即排除更多的右侧数值
      right = mid - 1
    } else {
      // 小了查右, 即排除更多的左侧数值
      left = mid + 1
    }
  }
  // 没有查到返回前置插入位置, 即为left
  return left
}
