import { rearrangeCharactersToMakeTargetString } from './rearrangeCharactersToMakeTargetString'

describe('2287. 重排字符形成目标字符串', () => {
  test('s = "ilovecodingonleetcode", target = "code"', () => {
    expect(rearrangeCharactersToMakeTargetString('ilovecodingonleetcode', 'code')).toBe(2)
  })

  test('s = "abcba", target = "abc"', () => {
    expect(rearrangeCharactersToMakeTargetString('abcba', 'abc')).toBe(1)
  })

  test('s = "aaaaaaaaaaaaaaaaaaaaaaaaaa", target = "aaaaaaaaa"', () => {
    expect(rearrangeCharactersToMakeTargetString('aaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaa')).toBe(2)
  })
})
