/**
 * 2287. 重排字符形成目标字符串
 * @param s 开始字符串
 * @param target 目标字符串
 */
export function rearrangeCharactersToMakeTargetString(s: string, target: string): number {
  // 思路: hash计数
  // 1. 双hash表计数
  // 2. 获取两张hash表的最小倍数
  const h1: Record<string, number> = {}
  const h2: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    h1[cur] = (h1[cur] || 0) + 1
  }
  for (let i = 0; i < target.length; i++) {
    const cur = target[i]
    h2[cur] = (h2[cur] || 0) + 1
  }
  // 遍历target对应的hash获取副本映射
  let res = Infinity
  for (const key in h2) {
    // 获取最小倍数
    res = Math.min(Math.floor((h1[key] || 0) / h2[key]), res)
  }
  return res
}
