import { powerOfTwo } from './powerOfTwo'

describe('231. 2 的幂 暴力', () => {
  test('n = 1', () => {
    expect(powerOfTwo(1)).toBe(true)
  }, 300)

  test('n = 16', () => {
    expect(powerOfTwo(16)).toBe(true)
  }, 300)

  test('n = 3', () => {
    expect(powerOfTwo(3)).toBe(false)
  }, 300)

  test('n = -16', () => {
    expect(powerOfTwo(-16)).toBe(false)
  }, 300)
})
