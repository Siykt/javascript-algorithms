import { climbStairs } from './climbStairs'

describe('70. 爬楼梯', () => {
  test('n = 2', () => {
    expect(climbStairs(2)).toBe(2)
  }, 300)

  test('n = 3', () => {
    expect(climbStairs(3)).toBe(3)
  }, 300)

  test('n = 45', () => {
    expect(climbStairs(45)).toBe(1836311903)
  }, 300)
})
