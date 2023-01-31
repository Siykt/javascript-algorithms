/**
 * 2319. 判断矩阵是否是一个 X 矩阵
 * @param grid 矩阵
 */
export function checkXMatrix(grid: number[][]): boolean {
  // 模拟
  const rowLen = grid[0].length
  let l = 0
  let r = rowLen - 1
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 0; j < rowLen; j++) {
      const cur = row[j]
      if (j === l || j === r) {
        if (!cur) return false
      } else if (cur) return false
    }
    l++
    r--
  }
  return true
}
