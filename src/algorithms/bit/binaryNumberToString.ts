/**
 * 面试题 05.02. 二进制数转字符串
 * @param num 数字
 * @returns
 */
export function binaryNumberToString(num: number): string {
  // 模拟
  const ans = ['0.']
  let i = 0
  while (i++ < 6) {
    num *= 2
    if (num < 1) {
      ans.push('0')
    } else {
      num -= 1
      ans.push('1')
      if (num === 0) return ans.join('')
    }
  }
  return 'ERROR'
}
