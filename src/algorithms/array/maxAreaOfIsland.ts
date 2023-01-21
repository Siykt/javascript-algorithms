/**
 * 695. 岛屿的最大面积
 * @param grid 矩阵
 */
export function maxAreaOfIsland(grid: number[][]): number {
  // 思路: BFS

  // 队列
  const queue: [number, number][] = []
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 0; j < row.length; j++) {
      // 入队
      if (row[j]) queue.push([i, j])
      let area = 0
      // 搜索周围
      while (queue.length) {
        const [r, c] = queue.shift() as [number, number]
        // 设置当前节点为无效节点避免重复检查
        if (!grid[r][c]) continue
        grid[r][c] = 0
        area++
        // 检查四向节点再入队
        for (const d of [1, -1]) {
          if (grid[r + d]?.[c]) {
            queue.push([r + d, c])
          }
          if (grid[r][c + d]) {
            queue.push([r, c + d])
          }
        }
      }
      // 更新答案
      ans = Math.max(ans, area)
    }
  }
  return ans
}
