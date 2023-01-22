import { orangesRotting } from './orangesRotting'

describe('994. 腐烂的橘子', () => {
  test('grid = [[2,1,1],[1,1,0],[0,1,1]]', () => {
    expect(
      orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ]),
    ).toBe(4)
  }, 300)

  test('grid = [[2,1,1],[0,1,1],[1,0,1]]', () => {
    expect(
      orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ]),
    ).toBe(-1)
  }, 300)

  test('grid = [[0,2]]', () => {
    expect(orangesRotting([[0, 2]])).toBe(0)
  }, 300)
})
