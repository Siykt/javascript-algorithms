// 罗马数字的映射hash
const ROMAN_NUM_HASH: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

/**
 * 13. 罗马数字转整数
 * @param s 罗马字符串
 */
export function romanToInteger(s: string): number {
  const len = s.length
  let res = 0
  for (let i = 0; i < len; i++) {
    const cur = ROMAN_NUM_HASH[s[i]]
    const next = ROMAN_NUM_HASH[s[i + 1]]
    if (cur < next) {
      // 如果当前值小于后一位即为特殊情况
      // 特殊情况即为当前为取负
      res -= cur
    } else {
      // 否则正常相加即可
      res += cur
    }
  }
  return res
}
