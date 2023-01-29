import { firstBadVersion } from './firstBadVersion'

describe('278. 第一个错误的版本', () => {
  const genIsBadVersion = (bad: number) => (version: number) => version >= bad

  test('n = 5, bad = 4', () => {
    expect(firstBadVersion(genIsBadVersion(4))(5)).toBe(4)
  }, 300)

  test('n = 1, bad = 1', () => {
    expect(firstBadVersion(genIsBadVersion(1))(1)).toBe(1)
  }, 300)

  test('Random', () => {
    const bad = Math.floor(Math.random() * 2000)
    const n = Math.floor(Math.random() * 2000) + 2000
    expect(firstBadVersion(genIsBadVersion(bad))(n)).toBe(bad)
  }, 300)
})
