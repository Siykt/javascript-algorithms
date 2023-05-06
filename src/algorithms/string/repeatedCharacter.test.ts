import { repeatedCharacter } from './repeatedCharacter'

describe('2351. 第一个出现两次的字母', () => {
  it('abaccdeff', () => {
    expect(repeatedCharacter('abaccdeff')).toBe('a')
  })

  it('keelbhk', () => {
    expect(repeatedCharacter('keelbhk')).toBe('e')
  })

  it('abcdd', () => {
    expect(repeatedCharacter('abcdd')).toBe('d')
  })
})
