const CODE = 'abcdefghijklmnopqrstuvwxyz'

/**
 * 2309. 兼具大小写的最好英文字母
 * @param s 字符串
 */
export function greatestEnglishLetterInUpperAndLowerCase(s: string): string {
  // 暴力
  for (let i = CODE.length - 1; i >= 0; i--) {
    const cur = CODE[i]
    if (s.indexOf(cur) > -1 && s.lastIndexOf(cur.toUpperCase()) > -1) {
      return cur.toUpperCase()
    }
  }
  return ''
}
