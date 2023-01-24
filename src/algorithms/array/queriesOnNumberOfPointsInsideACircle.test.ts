import { queriesOnNumberOfPointsInsideACircle } from './queriesOnNumberOfPointsInsideACircle'

describe('1828. 统计一个圆中点的数目', () => {
  test('points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]', () => {
    expect(
      queriesOnNumberOfPointsInsideACircle(
        [
          [1, 3],
          [3, 3],
          [5, 3],
          [2, 2],
        ],
        [
          [2, 3, 1],
          [4, 3, 1],
          [1, 1, 2],
        ],
      ),
    ).toEqual([3, 2, 2])
  }, 300)

  test('points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]', () => {
    expect(
      queriesOnNumberOfPointsInsideACircle(
        [
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5],
        ],
        [
          [1, 2, 2],
          [2, 2, 2],
          [4, 3, 2],
          [4, 3, 3],
        ],
      ),
    ).toEqual([2, 3, 2, 4])
  }, 300)
})
