/**
 * 242. 有效的字母异位词
 * @param s 字符串
 * @param t 字符串
 */
export function validAnagramByAC(s: string, t: string): boolean {
  const sl = s.length
  const tl = t.length
  if (sl !== tl) return false
  for (let i = 0; i < sl; i++) {
    const cur = s[i]
    // 判断是否存在
    if (t.indexOf(cur) < 0) return false
    // 替换对应字符
    t = t.replace(cur, '')
  }
  return !t.length
}

export function validAnagramByHash(s: string, t: string): boolean {
  const sl = s.length
  const tl = t.length
  if (sl !== tl) return false
  // 26位字符集
  const hash: Record<string, number> = {}
  for (let i = 0; i < sl; i++) {
    const sc = s[i]
    const tc = t[i]
    // s 写入hash + 1
    hash[sc] = (hash[sc] || 0) + 1
    // t 写入hash - 1
    hash[tc] = (hash[tc] || 0) - 1
    // 处理后
    // 如果存在异位 hash 中表就会存在非 0 元素
  }

  // 检查hash表中是否存在非 0 情况
  for (const k in hash) if (hash[k]) return false
  return true
}

export function validAnagramBySort(s: string, t: string): boolean {
  const sl = s.length
  const tl = t.length
  if (sl !== tl) return false
  return s.split('').sort().join() === t.split('').sort().join()
}
