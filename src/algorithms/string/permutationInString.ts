/**
 * 567. 字符串的排列
 * @param s1 字符串1
 * @param s2 字符串2
 */
export function permutationInString(s1: string, s2: string): boolean {
  // 思路: 滑动窗口与hash
  // 首先使用hash计数表来解决s1字符串的排列问题
  // 再之后就类似3. 无重复最长子串 来设计滑

  const l1 = s1.length
  const l2 = s2.length
  if (l1 > l2) return false

  // 写入hash计数表, 即统计词频
  const hash = Array(26).fill(0)
  const A_CODE = 'a'.charCodeAt(0)
  for (let i = 0; i < l1; i++) {
    hash[s1.charCodeAt(i) - A_CODE]++
  }

  // 开滑
  let left = 0
  let right = 0
  // 只需要推进l至 l2 与 l1 的差值即可
  while (left <= l2 - l1) {
    // 当s2具有符合对应的字符时进入窗口条件
    while (hash[s2.charCodeAt(right) - A_CODE] > 0 && right < left + l1) {
      // 调整已出现词频并推进右指针
      hash[s2.charCodeAt(right++) - A_CODE]--
    }
    // 当窗口长度符合时条件达成
    if (right - left === l1) return true
    // 否则回退词频并推进左侧指针
    hash[s2.charCodeAt(left++) - A_CODE]++
  }
  return false
}
