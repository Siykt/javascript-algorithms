import { pascalsTriangle } from './pascalsTriangle'

describe('118. 杨辉三角', () => {
  test('numRows = 1', () => {
    expect(pascalsTriangle(1)).toEqual([[1]])
  })

  test('numRows = 3', () => {
    expect(pascalsTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]])
  })

  test('numRows = 5', () => {
    expect(pascalsTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  })
})
