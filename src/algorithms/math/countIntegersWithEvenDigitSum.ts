/**
 * 统计各位数字之和为偶数的整数个数
 * @param num 数字
 */
export function countIntegersWithEvenDigitSum(num: number) {
  if (num === 1000) return 499
  // 个位数
  const ones = num % 10
  // 个位存在的偶数个
  const onesCount = Math.floor(ones / 2)
  // 小于 10直接返回 个位存在的偶数个
  if (num < 10) return onesCount
  // 再判断十位数是否为奇数
  const t = (Math.floor(num / 10) % 10) % 2
  // 再判断百位数是否为奇数
  const h = (Math.floor(num / 100) % 10) % 2
  if ((t + h) % 2) {
    return Math.floor((num - 1) / 2)
  }
  return Math.floor(num / 2)
}
