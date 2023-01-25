import { tribonacci } from './tribonacci'

describe('1137. 第 N 个泰波那契数', () => {
  test('n = 4', () => {
    expect(tribonacci(4)).toBe(4)
  }, 300)

  test('n = 25', () => {
    expect(tribonacci(25)).toBe(1389537)
  }, 300)
})
