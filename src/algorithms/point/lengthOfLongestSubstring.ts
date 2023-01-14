/**
 * 3. 无重复字符的最长子串
 * @param s 字符串
 */
export function lengthOfLongestSubstring(s: string): number {
  let maxCount = 0
  const len = s.length
  if (len <= 1) return len
  // 保存已经出现的字符串
  const strHash = new Set<string>()
  // 前指针
  let left = 0
  // 后指针
  let right = 0
  while (right < len) {
    const endStr = s[right++]
    // 如果存在重复的字符串，推进前指针至重复字符串之后
    // 并收缩字符串集合
    while (strHash.has(endStr)) {
      strHash.delete(s[left++])
    }
    strHash.add(endStr)
    maxCount = Math.max(maxCount, right - left)
  }
  return maxCount
}
