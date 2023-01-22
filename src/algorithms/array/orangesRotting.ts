const DIRECTION = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
]

/**
 * 994. 腐烂的橘子
 * @param grid 矩阵
 */
export function orangesRotting(grid: number[][]): number {
  // 思路: 多源BFS
  // 以腐烂状态(2)作为重复检查
  // 先将所有的腐烂状态的橘子入队
  // 再每分钟清空队列
  // 最终还需要检查是否还有未腐烂的橘子
  // 可以提前统计好橘子数来检查

  const q: [number, number][] = []
  const rowLen = grid[0].length
  let good = 0
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 0; j < rowLen; j++) {
      if (row[j] === 2) {
        // 置入烂橘子
        q.push([i, j])
      } else if (row[j] === 1) {
        good++
      }
    }
  }

  // 初始状态并不会有人腐烂, 所以从-1开始
  let ans = -1
  while (q.length) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const [r, c] = q.shift() as [number, number]
      for (const [_r, _c] of DIRECTION) {
        const nr = r + _r
        const nc = c + _c
        // 边界
        if (nr >= 0 && nr < grid.length && nc >= 0 && nc < rowLen && grid[nr][nc] === 1) {
          // 设置为腐烂状态
          grid[nr][nc] = 2
          // 好橘子-1
          good--
          // 添加值下一分钟腐烂的队列
          q.push([nr, nc])
        }
      }
    }
    ans++
  }
  // 检查是否还有未腐烂的橘子
  return good ? -1 : Math.max(ans, 0)
}
