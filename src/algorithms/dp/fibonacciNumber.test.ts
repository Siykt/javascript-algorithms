import { fibByDP, fibByPrefDP, fibByRecursion } from './fibonacciNumber'

describe('509. 斐波那契数 递归版', () => {
  test('n = 0', () => {
    expect(fibByRecursion(0)).toBe(0)
  }, 300)

  test('n = 1', () => {
    expect(fibByRecursion(1)).toBe(1)
  }, 300)

  test('n = 2', () => {
    expect(fibByRecursion(2)).toBe(1)
  }, 300)

  test('n = 4', () => {
    expect(fibByRecursion(4)).toBe(3)
  }, 300)

  test('n = 30', () => {
    expect(fibByRecursion(30)).toBe(832040)
  }, 300)
})

describe('509. 斐波那契数 动态规划版', () => {
  test('n = 0', () => {
    expect(fibByDP(0)).toBe(0)
  }, 300)

  test('n = 1', () => {
    expect(fibByDP(1)).toBe(1)
  }, 300)

  test('n = 2', () => {
    expect(fibByDP(2)).toBe(1)
  }, 300)

  test('n = 4', () => {
    expect(fibByDP(4)).toBe(3)
  }, 300)

  test('n = 30', () => {
    expect(fibByDP(30)).toBe(832040)
  }, 300)
})

describe('509. 斐波那契数 动态规划 + 压缩状态版', () => {
  test('n = 0', () => {
    expect(fibByPrefDP(0)).toBe(0)
  }, 300)

  test('n = 1', () => {
    expect(fibByPrefDP(1)).toBe(1)
  }, 300)

  test('n = 2', () => {
    expect(fibByPrefDP(2)).toBe(1)
  }, 300)

  test('n = 4', () => {
    expect(fibByPrefDP(4)).toBe(3)
  }, 300)

  test('n = 30', () => {
    expect(fibByPrefDP(30)).toBe(832040)
  }, 300)
})
