/**
 * 三数之和
 * @param nums 数字数组
 */
export function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  const len = nums.length
  if (len < 3) return res
  // 升序排序后可以避免计算 > 0 之后的值, 因为最小的数都大于0了, 三数之和肯定大于0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    const cur = nums[i]
    // 排除 > 0 之后的值
    if (cur > 0) {
      break
    } else if (i && nums[i] === nums[i - 1]) {
      // 跳过重复元素
      continue
    }
    let left = i + 1
    let right = len - 1
    // 迭代查询后续可能存在的三数之和
    while (left < right) {
      const ln = nums[left]
      const rn = nums[right]
      const sum = ln + cur + rn
      if (sum === 0) {
        // 符合题意
        res.push([ln, cur, rn])
        // 推进左指针并跳过重复值
        while (ln === nums[left + 1]) left++
        // 推进右指针并跳过重复值
        while (rn === nums[right - 1]) right--
        left++
        right--
      } else if (sum < 0) {
        // 小于 0 即为太小, 推进升序数组的左指针
        left++
      } else {
        // 大于 0 即为太大, 推进升序数组的右指针
        right--
      }
    }
  }
  return res
}
