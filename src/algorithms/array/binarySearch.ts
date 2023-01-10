/**
 * 704. 二分查找
 * @param nums 有序数组
 * @param target 目标值
 */
export function binarySearch(nums: number[], target: number): number {
  // 思路:
  // 1. 设置一个标记左侧开始的指针 left 与一个右侧结束的指针 right
  // 2. 从两个指针中间开始查, 并与 target 进行比较
  // 2.1 如果大了继续往左侧查询, 即排除更多的右侧数值
  // 2.2 如果小了继续往右侧查询, 即排除更多的左侧数值
  const len = nums.length
  let left = 0
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
  // 没有查到
  return -1
}
