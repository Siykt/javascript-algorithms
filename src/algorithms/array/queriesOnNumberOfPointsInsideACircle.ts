/**
 * 1828. 统计一个圆中点的数目
 * @param points 坐标
 * @param queries 圆
 */
export function queriesOnNumberOfPointsInsideACircle(points: number[][], queries: number[][]): number[] {
  // 思路: 枚举
  // 求圆形面积, 计算点是否在圆内

  const ans = []
  for (const [qx, qy, r] of queries) {
    let cnt = 0
    for (const [px, py] of points) {
      const dx = px - qx
      const dy = py - qy
      // 计算是否在圆内
      if (dx * dx + dy * dy <= r * r) cnt++
    }
    ans.push(cnt)
  }
  return ans
}
