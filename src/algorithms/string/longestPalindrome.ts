// 抽象扩散方法
function findPalindrome(s: string, left: number, right: number) {
  const sl = s.length
  // 检查越界情况与是否为相等的字符(是否扩散成功)
  while (left >= 0 && right < sl && s[left] === s[right]) {
    // 推进双指针
    left--
    right++
  }
  // 检查失败后需要回退一位
  return [left + 1, right - 1]
}

/**
 * 最长回文子串
 * @description 中心扩散
 * @param s 字符串
 */
export function longestPalindromeByExpandAroundCenter(s: string): string {
  // ---------------------------------
  // 中心扩散
  // 例: s = "babad"
  // 从 0 开始扩散
  // s[-1] 越界退出
  // 从 1 开始扩散
  // s[0] === s[2], 继续扩散
  // s[-1] 越界退出
  // 从 2 开始扩散
  // s[1] === s[3], 继续扩散
  // s[0] !== s[4], 退出
  // 最终获得 len = 3, 开始下标 start = 0, 结束下标 end = 2
  // ---------------------------------

  if (s.length < 2) return s

  const sl = s.length
  // 最长回文字符串的长度
  let pl = 0
  // 最长回文 len 的开始位置
  let start = 0
  // 最长回文 len 的结束位置
  let end = 0
  for (let i = 0; i < sl; i++) {
    // 尝试奇数len的回文模式
    const [l1, r1] = findPalindrome(s, i, i)
    // 尝试偶数len的回文模式
    const [l2, r2] = findPalindrome(s, i, i + 1)
    // 奇数len的回文模式成功上位
    if (r1 - l1 > pl) {
      start = l1
      end = r1
      pl = r1 - l1
    }
    // 偶数len的回文模式成功上位
    if (r2 - l2 > pl) {
      start = l2
      end = r2
      pl = r2 - l2
    }
  }
  // 返回end需要考虑左开右闭的情况
  return s.slice(start, end + 1)
}
