/**
 * 153. 寻找旋转排序数组中的最小值
 * @param nums 数组
 */
export function findMinimumInRotatedSortedArray(nums: number[]): number {
  // 与 33. 搜索旋转排序数组类似的写法
  // 直接找旋转点即可
  const len = nums.length
  let l = 1
  let r = len - 1
  let ln = nums[0]
  let rotate = 0
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const n = nums[mid]
    if (ln > n) {
      r = mid - 1
      rotate = mid
      ln = n
    } else {
      l = mid + 1
    }
  }
  return nums[rotate]
}
