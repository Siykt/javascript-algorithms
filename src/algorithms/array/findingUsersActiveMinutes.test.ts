import { findingUsersActiveMinutes } from './findingUsersActiveMinutes'

describe('1817. 查找用户活跃分钟数', () => {
  test('logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5', () => {
    expect(
      findingUsersActiveMinutes(
        [
          [0, 5],
          [1, 2],
          [0, 2],
          [0, 5],
          [1, 3],
        ],
        5,
      ),
    ).toEqual([0, 2, 0, 0, 0])
  })

  test('logs = [[1,1],[2,2],[2,3]], k = 4', () => {
    expect(
      findingUsersActiveMinutes(
        [
          [1, 1],
          [2, 2],
          [2, 3],
        ],
        4,
      ),
    ).toEqual([1, 1, 0, 0])
  })
})
