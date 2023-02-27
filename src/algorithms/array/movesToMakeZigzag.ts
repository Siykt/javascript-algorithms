/**
 * 1144. 递减元素使数组呈锯齿状
 * @param nums 数组
 */
export function movesToMakeZigzag(nums: number[]): number {
  // 模拟+分类讨论
  // 元素的值只能减少, 代表x <= y 需要变更为 x > y 的情况时, 更新 x 的值无意义
  // 所以在锯齿数组即可分为 基数下标为大数与偶数下标为大数 两种模式
  const d = [0, 0]
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    // 比较相邻的值, 边界作Inf处理
    const left = nums[i - 1] || Infinity
    const right = nums[i + 1] || Infinity
    // 将其中当前值只需降低至相邻值中更小那一位 + 1即可停止
    const sub = cur - Math.min(left, right) + 1
    // 更新锯齿数组的奇偶两种模式, 并限制更新值不能小于 0
    d[i % 2] += Math.max(sub, 0)
  }
  // 返回奇偶两种模式最小的值即可
  return Math.min(...d)
}
