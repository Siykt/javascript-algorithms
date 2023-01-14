import { gcd } from './gcd'

describe('最大公约数', () => {
  test('4, 8', () => {
    expect(gcd(4, 8)).toBe(4)
  })

  test('6, 8', () => {
    expect(gcd(6, 8)).toBe(2)
  })

  test('0, 0', () => {
    expect(gcd(0, 0)).toBe(0)
  })

  test('1, 0', () => {
    expect(gcd(0, 0)).toBe(0)
  })

  test('0, 1', () => {
    expect(gcd(0, 1)).toBe(0)
  })

  test('4, 4', () => {
    expect(gcd(4, 4)).toBe(4)
  })

  test('10, 17', () => {
    expect(gcd(10, 17)).toBe(1)
  })
})
