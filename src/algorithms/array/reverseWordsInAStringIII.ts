/**
 * 557. 反转字符串中的单词 III
 * @param s 字符串
 */
export function reverseWordsInAStringIII(s: string): string {
  // 思路: AC
  let ans = ''
  let lastSpace = 0
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === ' ') {
      for (let j = i - 1; j >= lastSpace; j--) {
        ans += s[j]
      }
      ans += ' '
      lastSpace = i + 1
    }
  }
  for (let j = s.length - 1; j >= lastSpace; j--) {
    ans += s[j]
  }
  return ans
}
