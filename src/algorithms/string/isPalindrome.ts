/**
 * 判断是否是回文数
 * @description 反转数字版本
 * @param x 数字
 */
export function isPalindromeByRevertedNumber(x: number): boolean {
  // 边界情况, x 必须大于 0
  if (x < 0) return false
  // x 为个位数时, 必然是回文数
  if (x < 10) return true
  // x 最后一位不能为 0, 因为首位不可能是 0
  if (x % 10 === 0) return false

  let rx = 0
  // 当 x <= rx 的时候, 已经获取过半的数字
  while (x > rx) {
    // 取 x 的最后一位
    rx = rx * 10 + (x % 10)
    // x 移除最后一位
    x = Math.floor(x / 10)
  }
  // 判断反转数是否与 x 相等
  return x === rx || x === Math.floor(rx / 10)
}

/**
 * 判断是否是回文数
 * @description 反转字符串版本
 * @param x 数字
 */
export function isPalindromeByRevertedString(x: number): boolean {
  // 边界情况, x 必须大于 0
  if (x < 0) return false
  // x 为个位数时, 必然是回文数
  if (x < 10) return true
  const s = x.toString()
  // 直接反转字符串, 判断是否相等
  return s.split('').reverse().join('') === s
}

/**
 * 判断是否是回文数
 * @description 双指针版本
 * @param x 数字
 */
export function isPalindromeByDoublePoint(x: number): boolean {
  // 边界情况, x 必须大于 0
  if (x < 0) return false
  // x 为个位数时, 必然是回文数
  if (x < 10) return true
  const s = x.toString()
  const len = Math.floor(s.length / 2)
  let left = 0
  let right = s.length - 1
  while (left <= len && right >= len) {
    // 判断左右两边是否相等, 并推进指针
    if (s[left++] !== s[right--]) return false
  }
  return true
}
