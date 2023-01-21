/**
 * 1824. 最少侧跳次数
 * @param obstacles 跑道道路
 */
export function minSideJumps(obstacles: number[]): number {
  // 思路: 动态规划, 最短路径题型
  // 题目有3条跑道其中我们只需要考虑🐸在的跑道上是否存在障碍
  // 当存在障碍时, d + 1, 且切换跑道, 这样就能获得完整的 “路径图”,
  // 而题目需要我们获取最短的路径, 所以需要一个动态的、即时的路径图

  // 基于3条路径的动态数列
  // 由于开始跑道为 2, 所以切换其他跑道所需要的次数即为 1
  const paths = [1, 0, 1]

  // 跳过首位遍历跑道数组
  for (let i = 1; i < obstacles.length; i++) {
    const obstacle = obstacles[i]
    // 检查障碍的位置
    for (let j = 1; j <= 3; j++) {
      if (obstacle === j) {
        // 调整当前跑道的值为不可跳过
        paths[j - 1] = Infinity
        break
      }
    }
    // 动态获取最短路径并将其作为下一次切换跑道需要的最小数值
    const shortestPath = Math.min(...paths) + 1
    // 基于最短路径更新动态数列
    for (let j = 1; j <= 3; j++) {
      // 更新非阻碍跑道的值
      if (obstacle !== j) {
        paths[j - 1] = Math.min(paths[j - 1], shortestPath)
      }
    }
  }
  // 选择其中最小的值即为最短路径
  return Math.min(...paths)
}
