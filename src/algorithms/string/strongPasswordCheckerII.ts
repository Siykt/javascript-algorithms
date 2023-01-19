/**
 * 2299. 强密码检验器 II
 * @param password 密码
 */
export function strongPasswordCheckerII(password: string): boolean {
  // 思路: 多标记

  // 边界
  if (password.length < 8) return false

  // 特殊字符
  const SPECIAL_HASHMAP = new Set('!@#$%^&*()-+'.split(''))
  // 标记
  let hasLower = false
  let hasUpper = false
  let hasSpecial = false
  let hasNumber = false

  // 上一个字符
  let last = ''
  for (let i = 0; i < password.length; i++) {
    const cur = password[i]
    if (last === cur) {
      return false
    }
    last = cur
    if (SPECIAL_HASHMAP.has(cur)) {
      hasSpecial = true
    } else if (!isNaN(+cur)) {
      hasNumber = true
    } else if (cur.toLowerCase() === cur) {
      hasLower = true
    } else if (cur.toUpperCase() === cur) {
      hasUpper = true
    }
  }
  return hasLower && hasUpper && hasSpecial && hasNumber
}
