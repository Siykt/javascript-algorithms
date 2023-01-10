import { matrixReshape } from './matrixReshape'

describe('566. 重塑矩阵', () => {
  const matrix = [
    [1, 2],
    [3, 4],
  ]

  test('mat = [[1,2],[3,4]], r = 1, c = 4', () => {
    expect(matrixReshape(matrix, 1, 4)).toEqual([[1, 2, 3, 4]])
  })

  test('smat = [[1,2],[3,4]], r = 2, c = 4', () => {
    expect(matrixReshape(matrix, 2, 4)).toEqual([
      [1, 2],
      [3, 4],
    ])
  })
})
