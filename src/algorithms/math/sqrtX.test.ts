import { sqrtX } from './sqrtX'

describe('69. x 的平方根', () => {
  test('x = 4', () => {
    expect(sqrtX(4)).toBe(2)
  })

  test('x = 8', () => {
    expect(sqrtX(8)).toBe(2)
  })

  test('Random', () => {
    const x = Math.floor(Math.random() * 10000)
    expect(sqrtX(x)).toBe(Math.floor(Math.sqrt(x)))
  })
})
