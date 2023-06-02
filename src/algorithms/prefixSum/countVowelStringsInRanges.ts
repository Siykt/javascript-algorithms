/**
 * 2559. 统计范围内的元音字符串数
 * @param words 字符串数组
 * @param queries 查询数组
 */
export function countVowelStringsInRanges(words: string[], queries: number[][]): number[] {
  // 前缀和
  // 统计words中出现头尾皆为元音字符的数目(以下称为目标字符)
  // 如: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
  // words[0] (即字符串"aba") 为目标字符, 记频 1
  // words[1] 不为目标字符, 记频不变, 还是为 1
  // words[2] 为目标字符, 记频 2
  // 以此类推, 即可得前缀和统计表: [1, 1, 2, 3, 4]
  // 避免边界情况, 我们可以多加一个数来规避统计时的额外判断
  // 最终结果即为: [0, 1, 1, 2, 3, 4]
  // 由于查询包含这两个值, 查询的答案即为: 前缀和统计表[r + 1] − 前缀和统计表[l]
  // 所以 queries[0] (即 l = 0, r = 2)的答案计算为: 3 - 1 = 2

  const v = new Set('aeiou')
  const s = new Array(words.length + 1).fill(0)
  for (let i = 0; i < words.length; i++) {
    // ts版本过低
    const cur = words[i]
    // 统计前缀
    s[i + 1] = s[i] + (v.has(cur.at(0) as string) && v.has(cur.at(-1) as string) ? 1 : 0)
  }
  return queries.map(([l, r]) => s[r + 1] - s[l])
}
