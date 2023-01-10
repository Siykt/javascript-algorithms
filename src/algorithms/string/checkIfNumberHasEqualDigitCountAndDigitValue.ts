/**
 * 2283. 判断一个数的数字计数是否等于数位的值
 * @param num 数字字符串
 */
export function checkIfNumberHasEqualDigitCountAndDigitValue(num: string): boolean {
  const hash: Record<string, number> = {}
  const len = num.length
  // 写入hash表
  for (let i = 0; i < len; i++) {
    const str = num[i]
    hash[str] = (hash[str] || 0) + 1
  }
  for (let i = 0; i < len; i++) {
    // 需要额外判断hash表边界
    if ((hash[i] || 0) !== +num[i]) return false
  }
  return true
}
