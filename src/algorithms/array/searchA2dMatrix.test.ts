import { searchA2dMatrix } from './searchA2dMatrix'

describe('74. 搜索二维矩阵', () => {
  test('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', () => {
    expect(
      searchA2dMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3,
      ),
    ).toBe(true)
  }, 300)

  test('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', () => {
    expect(
      searchA2dMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13,
      ),
    ).toBe(false)
  }, 300)

  test('matrix = [[1, 3]], target = 3', () => {
    expect(searchA2dMatrix([[1, 3]], 3)).toBe(true)
  }, 300)

  test('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 5', () => {
    expect(
      searchA2dMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        5,
      ),
    ).toBe(true)
  }, 300)
})
