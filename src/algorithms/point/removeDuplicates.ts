/**
 * 删除有序数组中的重复项
 * @param nums 数组
 */
export function removeDuplicates(nums: number[]): number {
  const len = nums.length
  // 边界处理
  if (len < 2) return len
  // 前指针
  let p1 = 0
  // 后指针
  let p2 = 0
  while (p2 < len) {
    // 如果非同一元素则推进 p1
    // 并保存 p2 的值
    if (nums[p2] !== nums[p1]) nums[++p1] = nums[p2]
    p2++
  }
  // 结果返回 p1 + 1 即为新数组的长度
  return p1 + 1
}
