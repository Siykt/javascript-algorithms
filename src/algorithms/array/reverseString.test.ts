import { reverseString } from './reverseString'

describe('344. 反转字符串', () => {
  test('s = ["h","e","l","l","o"]', () => {
    const s = ['h', 'e', 'l', 'l', 'o']
    reverseString(s)
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h'])
  })

  test('s = ["H","a","n","n","a","h"]', () => {
    const s = ['H', 'a', 'n', 'n', 'a', 'h']
    reverseString(s)
    expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
  })
})
