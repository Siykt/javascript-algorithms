// 阿拉伯数字到罗马数字的映射hash
const ROMAN_NUM_HASH: Record<number, string> = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
}

/**
 * 12. 整数转罗马数字
 * @description 通过单指针
 * @param num 数字
 */
export function intToRomanByPoint(num: number): string {
  let res = ''
  // 左侧计算
  let p = 1000
  while (p >= 1) {
    let cur = Math.floor(num / p)
    while (cur > 0) {
      // 如果存在直接取出
      if (ROMAN_NUM_HASH[p * cur]) {
        res += ROMAN_NUM_HASH[p * cur]
        break
      }
      // 否则进行特殊处理
      // 1. 如果当前值大于等于5, 则取5
      if (cur >= 5) {
        res += ROMAN_NUM_HASH[p * 5]
        // 推进5个单位
        cur -= 5
      } else {
        res += ROMAN_NUM_HASH[p]
        cur--
      }
    }
    num = num % p
    p /= 10
  }
  return res
}

// 从大到小的罗马数字的映射hash
const ROMAN_NUMS_HASH = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
/**
 * 整数转罗马数字
 * @description 通过贪心算法
 * @param num 数字
 */
export function intToRomanByGreedy(num: number) {
  let res = ''
  for (const n of ROMAN_NUMS_HASH) {
    const curNum = Math.floor(num / n)
    if (curNum) {
      // 直接替换成对应的罗马数字
      res += ROMAN_NUM_HASH[n].repeat(curNum)
      num = num % n
    }
  }
  return res
}
