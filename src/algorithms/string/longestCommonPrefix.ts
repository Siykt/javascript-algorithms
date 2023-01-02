/**
 * 最长公共前缀
 * @param strs 字符串数组
 */
export function longestCommonPrefix(strs: string[]): string {
  // 先取一个字符串作为基准
  const sp = strs.pop() as string
  let min = sp.length
  let cur = strs.pop()
  // 可以是空字符串
  while (cur !== undefined) {
    const maxLen = Math.max(sp.length, cur.length)
    // 遍历字符串找到其中不相等的下标
    for (let i = 0; i < maxLen; i++) {
      if (cur[i] !== sp[i]) {
        // 边界情况
        if (!(min = Math.min(min, i))) return ''
        break
      }
    }
    cur = strs.pop()
  }
  return sp.slice(0, min)
}
