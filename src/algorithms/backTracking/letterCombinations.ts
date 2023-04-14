/**
 * 17. 电话号码的字母组合
 * @param digits 字符串
 */
export function letterCombinations(digits: string): string[] {
  // 回溯

  // 排除边界
  if (!digits.length) return []

  // 构造字典
  const MAP = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const ans: string[] = []
  // 构造递归函数
  const backtrack = (str = '', nextIndex = 0) => {
    if (nextIndex < digits.length) {
      const nextDigits = digits[nextIndex]
      const nd = MAP[+nextDigits[0]]
      for (let i = 0; i < nd.length; i++) {
        // 推进后续位
        backtrack(str + nd[i], nextIndex + 1)
        // 回溯上位
      }
    } else {
      ans.push(str)
    }
  }
  backtrack()
  return ans
}
