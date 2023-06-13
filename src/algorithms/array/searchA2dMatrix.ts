/**
 * 74. 搜索二维矩阵
 * @param matrix 2d矩阵
 * @param target 目标值
 */
export function searchA2dMatrix(matrix: number[][], target: number): boolean {
  // 多源的二分
  // 同样是找合适的区间
  const rowLen = matrix[0].length - 1
  let start = 0
  for (let i = 0; i < matrix.length; i++) {
    const rowStart = matrix[i][0]
    const rowEnd = matrix[i][rowLen]
    if (rowStart === target || rowEnd === target) return true
    if (rowStart < target && rowEnd > target) {
      // 查找到了区间
      start = i
      break
    }
  }
  // 这里开始二分
  const nums = matrix[start]
  // 可以排除开始和结尾
  let l = 1
  let r = rowLen - 1
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    const n = nums[mid]
    if (n === target) return true
    if (n > target) r = mid - 1
    else l = mid + 1
  }
  return false
}
