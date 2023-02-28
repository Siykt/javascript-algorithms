import { mergeSimilarItems, mergeSimilarItemsByDoublePoint } from './mergeSimilarItems'

describe('2363. 合并相似的物品', () => {
  test('items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]', () => {
    expect(
      mergeSimilarItems(
        [
          [1, 1],
          [4, 5],
          [3, 8],
        ],
        [
          [3, 1],
          [1, 5],
        ],
      ),
    ).toEqual([
      [1, 6],
      [3, 9],
      [4, 5],
    ])
  }, 300)

  test('items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]', () => {
    expect(
      mergeSimilarItems(
        [
          [1, 1],
          [3, 2],
          [2, 3],
        ],
        [
          [2, 1],
          [3, 2],
          [1, 3],
        ],
      ),
    ).toEqual([
      [1, 4],
      [2, 4],
      [3, 4],
    ])
  }, 300)
})

describe('2363. 合并相似的物品 双指针版本', () => {
  test('items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]', () => {
    expect(
      mergeSimilarItemsByDoublePoint(
        [
          [1, 1],
          [4, 5],
          [3, 8],
        ],
        [
          [3, 1],
          [1, 5],
        ],
      ),
    ).toEqual([
      [1, 6],
      [3, 9],
      [4, 5],
    ])
  }, 300)

  test('items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]', () => {
    expect(
      mergeSimilarItemsByDoublePoint(
        [
          [1, 1],
          [3, 2],
          [2, 3],
        ],
        [
          [2, 1],
          [3, 2],
          [1, 3],
        ],
      ),
    ).toEqual([
      [1, 4],
      [2, 4],
      [3, 4],
    ])
  }, 300)
})
