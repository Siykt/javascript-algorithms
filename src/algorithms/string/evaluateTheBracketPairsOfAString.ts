/**
 * 1807. 替换字符串中的括号内容
 * @param s 字符串
 * @param knowledge 键值对
 */
export function evaluateTheBracketPairsOfAString(s: string, knowledge: string[][]): string {
  const len = s.length
  let start = -1
  // 写入hash
  const hash: Record<string, string> = {}
  for (const [k, v] of knowledge) {
    hash[k] = v
  }
  let res = ''
  for (let i = 0; i < len; i++) {
    const cur = s[i]
    // 找括号
    if (cur === '(') {
      start = i + 1
      continue
    } else if (cur === ')') {
      // 从hash表中查找替换值, 如果不存在使用 ? 代替
      const replace = hash[s.slice(start, i)] || '?'
      res += replace
      // 重置指针
      start = -1
    } else if (start < 0) {
      // 当不存在前置 ( 时加入答案
      res += cur
    }
  }
  return res
}
