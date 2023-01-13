import { findSmallestLetterGreaterThanTarget } from './findSmallestLetterGreaterThanTarget'

describe('744. 寻找比目标字母大的最小字母', () => {
  test('letters = ["c", "f", "j"], target = "a"', () => {
    expect(findSmallestLetterGreaterThanTarget(['c', 'f', 'j'], 'a')).toBe('c')
  })

  test('letters = ["c", "f", "j"], target = "c"', () => {
    expect(findSmallestLetterGreaterThanTarget(['c', 'f', 'j'], 'c')).toBe('f')
  })

  test('letters = ["x","x","y","y"], target = "z"', () => {
    expect(findSmallestLetterGreaterThanTarget(['x', 'x', 'y', 'y'], 'z')).toBe('x')
  })
})
