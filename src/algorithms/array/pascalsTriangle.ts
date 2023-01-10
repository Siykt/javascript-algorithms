/**
 * 118. 杨辉三角
 * @param numRows
 */
export function pascalsTriangle(numRows: number): number[][] {
  // 分析:
  // 1. 数据结构的规律为 1 开头 1 结尾
  // 2. 初开开头与结尾, 其余都是取上一行与其 对应下标 -1 位置与对应下标位置 的和
  // 2.1 如 row = 3, col 2 的位置即为 row 1 + row 2, 即为 1 + 1 = 2
  // 3. 每行的长度基于其处于第几行, 即 row = 3, row.length = 3

  // 思路:
  // 1. 头、尾填充为 1
  // 2. 基于 2.1 的规律计算左上方和右上方的数的和
  const res: number[][] = []
  for (let i = 0; i < numRows; i++) {
    const row: number[] = []
    // 头、尾填充为 1
    row[0] = 1
    row[i] = 1
    // 基于 2.1 的规律计算左上方和右上方的数的和
    // 排除首尾, i 即为最后一位
    for (let j = 1; j < i; j++) {
      // 上一行
      const prevRow = res[i - 1]
      // 左上方
      const left = prevRow[j - 1]
      // 右上方即为同列
      const right = prevRow[j]
      // 计算和
      row[j] = left + right
    }
    res.push(row)
  }
  return res
}
