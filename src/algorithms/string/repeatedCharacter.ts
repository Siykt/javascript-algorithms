/**
 * 第一个出现两次的字母
 * @param s 字符串
 */
export function repeatedCharacter(s: string) {
  // 用于记录已经出现过的字母
  const hash: Record<string, 1> = {}
  const len = s.length
  let left = 0
  while (left <= len) {
    const ls = s[left++]
    // 如果已经出现过, 则返回
    if (ls in hash) return ls
    hash[ls] = 1
  }
}
