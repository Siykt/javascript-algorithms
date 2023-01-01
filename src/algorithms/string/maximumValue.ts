/**
 * 2496. 数组中字符串的最大值
 * @param strs 字符串数组
 */
export function maximumValue(strs: string[]): number {
  let maxLen = 0
  // 暴力转换字符串
  for (const str of strs) maxLen = Math.max(isNaN(+str) ? str.length : +str, maxLen)
  return maxLen
}
