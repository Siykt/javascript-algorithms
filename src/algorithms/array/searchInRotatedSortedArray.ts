/**
 * 33. 搜索旋转排序数组
 * @param nums 数组
 * @param target 目标值
 */
export function searchInRotatedSortedArray(nums: number[], target: number): number {
  // 双二分，需要理解循环不变量
  // 二分中的循环不变量即为其搜索区间
  // 先找旋转
  const len = nums.length
  let l = 0
  let r = len - 1
  // 用最左侧的值作为找旋转点的target，找到右侧比它小的位置
  const lf = nums[l]
  let rotate = l
  let ln = lf
  // 区间 [l, r]
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const n = nums[mid]
    if (ln > n) {
      ln = n
      rotate = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  // console.log('rotate ->', rotate)
  if (ln === target) return rotate
  if (ln > target) return -1
  // 确定区间再搜索一遍
  // 如果旋转点为 0 则不存在区分点，区间即为整个 nums
  if (rotate === 0) {
    l = 0
    r = len - 1
  } else if (lf > target) {
    // 左侧比target大，说明target在右侧
    l = rotate + 1
    r = len - 1
  } else {
    l = 0
    r = rotate - 1
  }
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const n = nums[mid]
    if (target === n) {
      return mid
    } else if (target > n) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}
