const A_CHAR_CODE = 'A'.charCodeAt(0)
const QWER_INDEX_MAP = [16, 22, 4, 17]

/**
 * 1234. 替换子串得到平衡字符串
 * @param s 字符串
 */
export function replaceTheSubstringForBalancedString(s: string): number {
  // 滑动窗口
  // 统计字符串中所有字符的数量
  const hash = Array(23).fill(0)
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - A_CHAR_CODE]++
  }
  // 如果每个字符的数量都小于等于 n/4，说明字符串 s 就是一个「平衡字符串」，直接返回 0
  const m = s.length / 4
  if (QWER_INDEX_MAP.every((code) => hash[code] === m)) return 0

  // 否则使用同向双指针(长度不固定的滑动窗口), 推进 right (扩大窗口)
  let ans = Infinity
  let left = 0
  for (let right = 0; right < s.length; right++) {
    // 调整字符计数
    hash[s.charCodeAt(right) - A_CHAR_CODE]--
    // 检查子串之外所有字符出现次数是否超过 m
    while (left <= right && QWER_INDEX_MAP.every((code) => hash[code] <= m)) {
      ans = Math.min(ans, right - left + 1)
      // 缩小子串
      hash[s.charCodeAt(left++) - A_CHAR_CODE]++
    }
  }
  return ans
}
