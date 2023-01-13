import { reverseWordsInAStringIII } from './reverseWordsInAStringIII'

describe('557. 反转字符串中的单词 III', () => {
  test(`s = "Let's take LeetCode contest"`, () => {
    expect(reverseWordsInAStringIII("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
  })

  test(`s = "God Ding"`, () => {
    expect(reverseWordsInAStringIII('God Ding')).toBe('doG gniD')
  })
})
