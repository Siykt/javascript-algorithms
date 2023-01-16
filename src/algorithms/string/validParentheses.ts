/**
 * 20. 有效的括号
 * @param s 字符串
 */
export function validParentheses(s: string): boolean {
  // 思路: 栈 + hash
  // 利用栈的特点, 出栈入栈来判断括号是否有效

  const HASH = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    // 判断是否为左括号
    if (cur in HASH) {
      stack.push(cur)
    } else if (HASH[stack.pop() as keyof typeof HASH] !== cur) {
      // 判断是否与对应的右括号相同
      return false
    }
  }
  // 栈堆应当已经清空
  return !stack.length
}
