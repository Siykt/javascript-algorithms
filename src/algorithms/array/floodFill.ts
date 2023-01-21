/**
 * 733. 图像渲染
 * @param image 图像数组
 * @param sr 横坐标
 * @param sc 纵坐标
 * @param color 新颜色
 */
export function floodFillByDFS(image: number[][], sr: number, sc: number, color: number): number[][] {
  // 思路: DFS
  // DFS使用stack, push入栈, pop出栈
  // 即每次pop时返回距离原点最远的值

  // 栈
  const stack: [number, number][] = [[sr, sc]]
  // 记录初始颜色, 用于寻找相邻色
  const oc = image[sr][sc]
  // 无情边界
  if (oc === color) return image
  while (stack.length) {
    // 出栈
    const [r, c] = stack.pop() as [number, number]
    // 更新值
    image[r][c] = color

    // 检查四向节点再入栈
    for (const d of [1, -1]) {
      if (image[r + d]?.[c] === oc) {
        stack.push([r + d, c])
      }
      if (image[r][c + d] === oc) {
        stack.push([r, c + d])
      }
    }
  }
  return image
}

export function floodFillByBFS(image: number[][], sr: number, sc: number, color: number): number[][] {
  // 思路: BFS
  // BFS使用queue, push入栈, shift出栈
  // 即每次shift时返回距离原点最近的值

  // 队列
  const queue: [number, number][] = [[sr, sc]]
  // 记录初始颜色, 用于寻找相邻色
  const oc = image[sr][sc]
  // 无情边界
  if (oc === color) return image
  while (queue.length) {
    // 出队列
    const [r, c] = queue.shift() as [number, number]
    // 更新值
    image[r][c] = color

    // 检查四向节点再入队列
    for (const d of [1, -1]) {
      if (image[r + d]?.[c] === oc) {
        queue.push([r + d, c])
      }
      if (image[r][c + d] === oc) {
        queue.push([r, c + d])
      }
    }
  }
  return image
}
