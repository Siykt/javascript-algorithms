import { floodFillByBFS, floodFillByDFS } from './floodFill'

describe('733. 图像渲染 DFS', () => {
  test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2', () => {
    expect(
      floodFillByDFS(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2,
      ),
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
  })

  test('image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2', () => {
    expect(
      floodFillByDFS(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        2,
      ),
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
    ])
  })

  test('边界测试', () => {
    expect(
      floodFillByDFS(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0,
      ),
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ])
  })
})

describe('733. 图像渲染 BFS', () => {
  test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2', () => {
    expect(
      floodFillByBFS(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2,
      ),
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
  })

  test('image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2', () => {
    expect(
      floodFillByBFS(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        2,
      ),
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
    ])
  })

  test('边界测试', () => {
    expect(
      floodFillByBFS(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0,
      ),
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ])
  })
})
