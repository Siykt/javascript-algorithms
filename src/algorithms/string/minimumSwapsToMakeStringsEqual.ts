/**
 * 1247. 交换字符使得字符串相同
 * @param s1 字符串1
 * @param s2 字符串2
 */
export function minimumSwapsToMakeStringsEqual(s1: string, s2: string): number {
  // 差异计数 + 计算
  const diff = [0, 0]
  for (let i = 0; i < s1.length; i++) {
    // 统计x,y的差异
    if (s1.charAt(i) !== s2.charAt(i)) {
      // x 和 y ASCII 值的二进制最低位不同
      diff[s1.charCodeAt(i) % 2]++
    }
  }
  // 计算总的差异
  const d = diff[0] + diff[1]
  // 如果总的差异不是偶数, 则无法实现替换
  if (d % 2 === 1) return -1
  // 然后检查x是否为偶数并返回d/2, 如果不是偶数则返回d/2+1
  return d / 2 + (diff[0] % 2)
}
