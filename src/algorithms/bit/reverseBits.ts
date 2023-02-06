/**
 * 190. 颠倒二进制位
 * @param n 数
 */
export function reverseBits(n: number): number {
  // 位运算 + 模拟
  let ans = 0
  for (let i = 0; i < 32 && n > 0; ++i) {
    ans |= (n & 1) << (31 - i)
    // 注意操作符
    n >>>= 1
  }
  return ans >>> 0
}
