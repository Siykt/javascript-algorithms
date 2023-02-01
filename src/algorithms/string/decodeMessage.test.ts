import { decodeMessage } from './decodeMessage'

describe('2325. 解密消息', () => {
  test('key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"', () => {
    expect(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')).toBe('this is a secret')
  }, 300)

  test('key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"', () => {
    expect(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')).toBe(
      'the five boxing wizards jump quickly',
    )
  }, 300)
})
