import { permute } from './permute'

describe('46. 全排列', () => {
  test('nums = [1,2,3]', () => {
    expect(permute([1, 2, 3])).toEqual(
      expect.arrayContaining(
        [
          [1, 2, 3],
          [1, 3, 2],
          [2, 1, 3],
          [2, 3, 1],
          [3, 1, 2],
          [3, 2, 1],
        ].map(expect.arrayContaining),
      ),
    )
  }, 300)

  test('nums = [0,1]', () => {
    expect(permute([0, 1])).toEqual(
      expect.arrayContaining(
        [
          [0, 1],
          [1, 0],
        ].map(expect.arrayContaining),
      ),
    )
  }, 300)

  test('nums = [1]', () => {
    expect(permute([1])).toEqual([[1]])
  }, 300)
})
