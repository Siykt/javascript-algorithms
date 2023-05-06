/**
 * 2185. 统计包含给定前缀的字符串
 * @param words 字符串数组
 * @param pref 前缀
 */
export function countingWordsWithAGivenPrefix(words: string[], pref: string): number {
  let res = 0
  for (const word of words) {
    if (word.startsWith(pref, 0)) {
      res++
    }
  }
  return res
}
