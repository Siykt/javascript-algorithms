/**
 * 162. 寻找峰值
 * @param nums 数组
 */
export function findPeakElement(nums: number[]): number {
  // 二分找区间
  // 怎么找区间? 用二段性来找!
  // 怎么理解二段性?
  // mid 将一个集合分割为两个部分
  // 其中当一个部分不存在搜索的值时, 另一个部分必然存在
  // 这就是二段性
  let l = 0
  let r = nums.length - 1
  // 使用 [Left, Right] 需要注意 nums 为严格递增的情况
  // 这里使用 [Left, Right) 区间
  while (l < r) {
    const mid = (r + l) >> 1
    const n = nums[mid]
    // 当mid大于其右侧值时, 右侧即可为作为不存在峰值的情况
    // 同时说明l ~ mid存在峰值区间即为 [l, mid)
    if (n >= nums[mid + 1]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}
