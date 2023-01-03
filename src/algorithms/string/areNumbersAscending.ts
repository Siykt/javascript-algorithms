/**
 * 检查句子中的数字是否递增
 * @param s 字符串
 */
export function areNumbersAscending(s: string): boolean {
  let min = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    const cur = s[i]
    // 如果不是数字或者空格就跳过
    if (cur === ' ' || isNaN(+cur)) continue
    else {
      const j = i + 1
      const prev = cur + s[j]
      let next = 0
      // 如果不为数字就跳过
      if (isNaN(+prev)) {
        next = +cur
      } else {
        next = +prev
        i++
      }
      if (next > min) {
        min = next
      } else {
        // 如果不是递增的就返回false
        return false
      }
    }
  }
  return true
}
