/**
 * 2315. 统计星号
 * @param s 字符串
 */
export function countAsterisks(s: string): number {
  // 模拟

  // 计算开始竖线
  let can = 1
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === '*') {
      ans += can
    } else if (cur === '|') {
      can ^= 1
    }
  }
  return ans
}
