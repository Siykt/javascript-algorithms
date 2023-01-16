import { validParentheses } from './validParentheses'

describe('20. 有效的括号', () => {
  test('s = "()"', () => {
    expect(validParentheses('()')).toBe(true)
  })

  test('s = "()[]{}"', () => {
    expect(validParentheses('()[]{}')).toBe(true)
  })

  test('s = "(]"', () => {
    expect(validParentheses('(]')).toBe(false)
  })
})
