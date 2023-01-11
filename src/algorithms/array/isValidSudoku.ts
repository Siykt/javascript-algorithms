export function isValidSudoku(board: string[][]): boolean {
  // 思路: 暴力检查
  // 1. 输入数据borad是一个 9x9 的二维矩阵
  // 2. 主要难点为如何获值的: 9宫格/行/列
  // 3. 可知坐标b[0][0]的9宫格为:
  // 3.1 第一列 b[0][0] b[0][1] b[0][2]
  // 3.2 第二列 b[1][0] b[1][1] b[1][2]
  // 3.3 第三列 b[2][0] b[2][1] b[2][2]
  // 3.4 b[0][0]的行坐标为
  // 3.5 b[0][0] - b[0][8]
  // 3.4 b[0][0]的列坐标为
  // 3.5 b[0][0] - b[8][0]
  // 4. 暴力检查直接检查其对应的行、列和宫格

  const len = 9
  // 列
  for (let i = 0; i < len; i++) {
    // 行
    for (let j = 0; j < len; j++) {
      const cur = board[i][j]
      // 跳过空值
      if (cur === '.') continue
      // 检查列, 可跳过已检查数字
      for (let c = i + 1; c < len; c++) {
        if (board[c][j] === cur) return false
      }
      // 检查行, 可跳过已检查数字
      for (let r = j + 1; r < len; r++) {
        if (board[i][r] === cur) return false
      }
      // 检查9宫格
      // 获取当前值9宫格位置的首列
      const fc = Math.floor(i / 3) * 3
      // 获取当前值9宫格位置的首行
      const fr = Math.floor(j / 3) * 3
      // 检查9宫格的行与列
      for (let c = fc; c < fc + 3; c++) {
        for (let r = fr; r < fr + 3; r++) {
          // 跳过自身
          if (c === i && r === j) continue
          if (board[c][r] === cur) return false
        }
      }
    }
  }
  return true
}
