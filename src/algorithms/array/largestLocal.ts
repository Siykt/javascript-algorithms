const createGrid = (n: number): number[][] => {
  const grid: number[][] = []
  for (let i = 0; i < n; i++) {
    grid.push(Array(n).fill(0))
  }
  return grid
}

/**
 * 2373. 矩阵中的局部最大值
 * @param grid 矩阵
 */
export function largestLocal(grid: number[][]): number[][] {
  // 模拟
  const n = grid.length
  const maxLocalLen = n - 2
  const ans: number[][] = createGrid(maxLocalLen)
  for (let i = 0; i < maxLocalLen; i++) {
    for (let j = 0; j < maxLocalLen; j++) {
      // for (let x = i; x < i + 3; x++) {
      //   for (let y = j; y < j + 3; y++) {
      //     ans[i][j] = Math.max(ans[i][j], grid[x][y])
      //   }
      // }
      // 字面量快一点
      ans[i][j] = Math.max(
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2],
      )
    }
  }
  return ans
}
