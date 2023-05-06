/**
 * 6. N 字形变换
 * @param s 字符串
 * @param numRows 行数
 */
export function zigzagConversion(s: string, numRows: number): string {
  // 从例子 s = "PAYPALISHIRING" numPows = 3
  // 第一列第一个(字符串P)与第一列第二个的间隔为 2numPows - 2
  // 第一列第二个 A 的坐标为 2 * 3 - 2 = 4, 0 后移 4 格即为 5

  // 第二列第一个(字符串A, 下标 1)与第二列第二个的间隔为 2numPows - 2 * 2
  // 第二列第二个 P 的坐标为 2 * 3 - 4 = 2, 1 后移 2 格即位 4

  // 以此类推即可获得一个基于 numPows 的循环
  // 它们的关系即为 2numPows - 1
  // 再使用双指针向中心靠拢即可获得答案

  const len = s.length
  if (numRows === 1 || numRows >= len) return s

  let res = ''
  // 下一个循环的位置
  const loopLen = 2 * numRows - 2
  // 左侧的指针
  let left = 0
  while (left < numRows) {
    // 加上间隔位置
    let i = 0
    let ls = left + i * loopLen
    while (ls < len) {
      res += s[ls]
      i++
      // 下一列的位置
      ls = i * loopLen + left
      // 添加中间存在的字符
      // 排除首尾
      if (left && left !== numRows - 1) {
        const mid = s[ls - left * 2]
        if (mid) {
          res += mid
        }
      }
    }
    left++
  }
  return res
}
