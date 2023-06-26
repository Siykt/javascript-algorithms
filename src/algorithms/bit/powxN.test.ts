import { powxN } from './powxN'

describe('50. Pow(x, n)', () => {
  test('x = 2.00000, n = 10', () => {
    expect(+powxN(2, 10).toFixed(5)).toBe(1024)
  }, 300)

  test('x = 2.10000, n = 3', () => {
    expect(+powxN(2.1, 3).toFixed(5)).toBe(9.261)
  }, 300)

  test('x = 2.00000, n = -2', () => {
    expect(+powxN(2, -2).toFixed(5)).toBe(0.25)
  }, 300)

  test('x = 2.00000, n = -2147483648', () => {
    expect(+powxN(2, -2147483648).toFixed(5)).toBe(0)
  }, 300)
})
