export function threeSumClosest(nums: number[], target: number): number {
  let res = Infinity
  const len = nums.length
  // 升序排序后可以避免重复计算
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    const cur = nums[i]
    // 跳过重复元素
    if (i && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = len - 1
    // 迭代查询后续可能存在的三数之和
    while (left < right) {
      const ln = nums[left]
      const rn = nums[right]
      const sum = ln + cur + rn
      if (sum === target) {
        return target
      } else if (sum < target) {
        left++
      } else {
        right--
      }
      res = Math.abs(target - sum) < Math.abs(target - res) ? sum : res
    }
  }
  return res
}
