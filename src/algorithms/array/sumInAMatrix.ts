/**
 * 2679. 矩阵中的和
 * @param nums 矩阵
 */
export function sumInAMatrix(nums: number[][]): number {
  // 排序后同位取最大值
  let ans = 0
  nums.forEach((n) => n.sort((a, b) => a - b))
  const rowLen = nums[0].length
  const colLen = nums.length
  for (let i = 0; i < rowLen; i++) {
    let curColMaxValue = Math.max()
    for (let j = 0; j < colLen; j++) {
      curColMaxValue = Math.max(nums[j][i], curColMaxValue)
    }
    ans += curColMaxValue
  }
  return ans
}
