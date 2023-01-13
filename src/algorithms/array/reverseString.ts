/**
 * 344. 反转字符串
 * @param s 字符串数组
 */
export function reverseString(s: string[]): void {
  // 双指针
  let l = 0
  let r = s.length - 1
  while (l < r) {
    const temp = s[l]
    s[l++] = s[r]
    s[r--] = temp
  }
}
