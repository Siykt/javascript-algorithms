import { combine } from './combine'

describe('77. 组合', () => {
  test('n = 4, k = 2', () => {
    expect(combine(4, 2)).toEqual(
      expect.arrayContaining(
        [
          [2, 4],
          [3, 4],
          [2, 3],
          [1, 2],
          [1, 3],
          [1, 4],
        ].map(expect.arrayContaining),
      ),
    )
  }, 300)

  test('n = 1, k = 1', () => {
    expect(combine(1, 1)).toEqual([[1]])
  }, 300)
})
