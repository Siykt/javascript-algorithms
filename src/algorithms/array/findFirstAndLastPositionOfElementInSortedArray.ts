/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * @param nums 非递减顺序排列的整数数组
 * @param target 目标值
 */
export function findFirstAndLastPositionOfElementInSortedArray(nums: number[], target: number): number[] {
  // 思路: 二分
  const len = nums.length
  let left = 0
  let right = len - 1
  while (left <= right) {
    // 取两个指针的中间值并加上 left 偏移
    const mid = left + Math.floor((right - left) / 2)
    const n = nums[mid]
    if (n === target) {
      // 继续推进两侧直到找到不同值
      let start = mid
      while (nums[start] === n) start--
      let end = mid
      while (nums[end] === n) end++
      return [start + 1, end - 1]
    } else if (n > target) {
      // 大了查左, 即排除更多的右侧数值
      right = mid - 1
    } else {
      // 小了查右, 即排除更多的左侧数值
      left = mid + 1
    }
  }
  // 没有查到
  return [-1, -1]
}
