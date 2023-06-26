/**
 * 50. Pow(x, n)
 * @param x x
 * @param n n
 */
export function powxN(x: number, n: number): number {
  // 模拟寄了, 上快速幂吧
  const isNeg = n < 0
  // 统一计算的方式, 在结束时再计算是否为负
  n = Math.abs(n)
  let ans = 1
  while (n) {
    if (n & 1) ans *= x
    x *= x
    n = Math.abs(n >> 1)
  }
  // 负数取商正数去积
  return isNeg ? 1 / ans : ans
}
