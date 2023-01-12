/**
 * 387. 字符串中的第一个唯一字符
 * @param s 字符串
 */
export function firstUniqueCharacterInAString(s: string): number {
  // 思路: hash表
  // 1. 查找值是否重复
  // 2. 跳过重复值
  // 3. 判断字符串是否唯一
  const hash: Record<string, number> = {}
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    // 跳过重复值
    if (cur in hash) continue
    // 判断是否唯一
    if (s.indexOf(cur) === s.lastIndexOf(cur)) return i
    hash[cur] = 1
  }
  return -1
}
