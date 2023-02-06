import { minimumTotal } from './minimumTotal'

describe('120. 三角形最小路径和', () => {
  test('triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]', () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11)
  }, 300)

  test('triangle = [[-10]]', () => {
    expect(minimumTotal([[-10]])).toBe(-10)
  }, 300)
})
