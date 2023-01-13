/**
 * 69. x 的平方根
 * @param x 数字
 */
export function sqrtX(x: number): number {
  // 牛顿迭代法 https://en.wikipedia.org/wiki/Integer_square_root#Using_only_integer_division
  let ans = x
  while (x / ans < ans) {
    ans = Math.floor((ans + x / ans) / 2)
  }
  return Math.floor(ans)
}
