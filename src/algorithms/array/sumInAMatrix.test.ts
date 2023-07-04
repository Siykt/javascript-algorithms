import { sumInAMatrix } from './sumInAMatrix'

describe('2679. 矩阵中的和', () => {
  test('nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]', () => {
    expect(
      sumInAMatrix([
        [7, 2, 1],
        [6, 4, 2],
        [6, 5, 3],
        [3, 2, 1],
      ]),
    ).toBe(15)
  }, 300)

  test('nums = [[1]]', () => {
    expect(sumInAMatrix([[1]])).toBe(1)
  }, 300)
})
