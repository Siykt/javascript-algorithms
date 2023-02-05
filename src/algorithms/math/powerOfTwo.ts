/**
 * 231. 2 的幂
 * @param n 数
 */
export function powerOfTwo(n: number): boolean {
  // 暴力
  if (n <= 0) return false
  while (n) {
    if (n === 1 || n === -1) return true
    if (n % 2) return false
    n = n / 2
  }
  return true
}
