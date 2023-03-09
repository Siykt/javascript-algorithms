import { minimumRecolors } from './minimumRecolors'

describe('2379. 得到 K 个黑块的最少涂色次数', () => {
  test('blocks = "WBBWWBBWBW", k = 7', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3)
  }, 300)

  test('blocks = "WBWBBBW", k = 2', () => {
    expect(minimumRecolors('WBWBBBW', 2)).toBe(0)
  }, 300)
})
