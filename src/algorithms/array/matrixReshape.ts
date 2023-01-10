/**
 * 566. 重塑矩阵
 * @param mat 矩阵
 * @param r 行数
 * @param c 列数
 */
export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  // 思路:
  // 1. 扁平化数组
  // 2. 检查矩阵合理性
  // 3. 重塑矩阵

  // 扁平化数组
  const flattedMat = mat.flat(Infinity) as number[]
  const len = flattedMat.length

  // 通过是否支持新矩阵的 行r * 列c 判断
  if (len !== r * c) return mat

  // 重塑矩阵
  const res: number[][] = []
  let i = 0
  while (i < len) {
    res.push(flattedMat.slice(i, i + c))
    i += c
  }
  return res
}
