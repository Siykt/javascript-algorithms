import { checkXMatrix } from './checkXMatrix'

describe('2319. 判断矩阵是否是一个 X 矩阵', () => {
  test('grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]', () => {
    expect(
      checkXMatrix([
        [2, 0, 0, 1],
        [0, 3, 1, 0],
        [0, 5, 2, 0],
        [4, 0, 0, 2],
      ]),
    ).toBe(true)
  }, 300)

  test('grid = [[5,7,0],[0,3,1],[0,5,0]]', () => {
    expect(
      checkXMatrix([
        [5, 7, 0],
        [0, 3, 1],
        [0, 5, 0],
      ]),
    ).toBe(false)
  }, 300)
})
