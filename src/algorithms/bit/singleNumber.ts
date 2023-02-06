/**
 * 136. 只出现一次的数字
 * @param nums 数组
 */
export function singleNumber(nums: number[]): number {
  // 位运算
  // 交换律 a ^ b ^ c === a ^ c ^ b
  // 相同的数异或为0, 即 2 ^ 2 = 0
  // 即 2 ^ 2 ^ 3 ^ 4 ^ 4 === 2 ^ 2 ^ 4 ^ 4 ^ 3 === 0 ^ 0 ^ 3 === 3
  let ans = 0
  for (const n of nums) {
    ans ^= n
  }
  return ans
}
