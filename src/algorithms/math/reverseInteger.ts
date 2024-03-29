const MIN = -2147483648
const MAX = 2147483647

/**
 * 7. 整数反转
 * @param x 数字
 */
export function reverseIntegerByStringReverse(x: number): number {
  // 是否为负数
  const isNegative = x < 0
  if (isNegative) {
    x = Math.abs(x)
  }
  // 暴力反转
  const rs = x.toString().split('').reverse().join('')
  const rx = isNegative ? -rs : +rs
  // 判断是否越界
  if (rx > MAX || rx < MIN) return 0
  return rx
}

// 数学除法与取余
export function reverseIntegerByMath(x: number): number {
  // 是否为负数
  const isNegative = x < 0
  if (isNegative) {
    x = Math.abs(x)
  }
  let rx = 0
  while (x) {
    // 取10位反转
    rx = rx * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  rx = isNegative ? -rx : +rx
  if (rx > MAX || rx < MIN) return 0
  return rx
}
