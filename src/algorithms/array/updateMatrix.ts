/**
 * 542. 01 矩阵
 * @param mat 01 矩阵
 */
export function updateMatrix(mat: number[][]): number[][] {
  // 思路: BFS
  // 多源需要考虑重复入栈的问题
  // 查询1的至0的距离(从1扩散)需要额外的空间(比如hash)保存已访问元素
  // 而从0扩散去找1的位置就可以提前将未访问过的1设置为特殊标识来实现跳过已访问元素

  const q: [number, number][] = []
  const rowLen = mat[0].length
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]
    for (let j = 0; j < rowLen; j++) {
      // 设置未访问标识
      if (row[j]) row[j] = -1
      // 将0入队
      else q.push([i, j])
    }
  }

  // 找1
  const DIRECTION = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]
  while (q.length) {
    const [r, c] = q.shift() as [number, number]
    for (const [_r, _c] of DIRECTION) {
      const nr = r + _r
      const nc = c + _c
      if (
        // 边界
        nr >= 0 &&
        nr < mat.length &&
        nc >= 0 &&
        nc < rowLen &&
        // 检查是否未访问
        mat[nr][nc] < 0
      ) {
        mat[nr][nc] = mat[r][c] + 1
        // 需要继续扩散所以将其重新入队
        q.push([nr, nc])
      }
    }
  }
  return mat
}
