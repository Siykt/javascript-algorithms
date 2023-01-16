import { arrangeCoinsByBS, arrangeCoinsByMath } from './arrangeCoins'

describe('441. 排列硬币 数学', () => {
  test('n = 5', () => {
    expect(arrangeCoinsByMath(5)).toBe(2)
  })

  test('n = 8', () => {
    expect(arrangeCoinsByMath(8)).toBe(3)
  })
})

describe('441. 排列硬币 二分', () => {
  test('n = 5', () => {
    expect(arrangeCoinsByBS(5)).toBe(2)
  })

  test('n = 8', () => {
    expect(arrangeCoinsByBS(8)).toBe(3)
  })

  test('n = 1', () => {
    expect(arrangeCoinsByBS(1)).toBe(1)
  })

  test('n = 2', () => {
    expect(arrangeCoinsByBS(2)).toBe(1)
  })
})
