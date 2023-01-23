/**
 * 2303. 计算应缴税款总额
 * @param brackets 税率
 * @param income 总收入
 */
export function calculateAmountPaidInTaxes(brackets: number[][], income: number): number {
  // 思路: 模拟, income <= 1000

  // 直接暴力循环
  let ans = 0
  let lastUpper = 0
  for (const [upper, percent] of brackets) {
    if (income <= upper) {
      ans += (income - lastUpper) * percent
      break
    }
    ans += (upper - lastUpper) * percent
    lastUpper = upper
  }
  return ans / 100
}
