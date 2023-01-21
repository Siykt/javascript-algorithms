import { minSideJumps } from './minSideJumps'

describe('1824. 最少侧跳次数', () => {
  test('obstacles = [0,1,2,3,0]', () => {
    expect(minSideJumps([0, 1, 2, 3, 0])).toBe(2)
  })

  test('obstacles = [0,1,1,3,3,0]', () => {
    expect(minSideJumps([0, 1, 1, 3, 3, 0])).toBe(0)
  })

  test('obstacles = [0,2,1,0,3,0]', () => {
    expect(minSideJumps([0, 2, 1, 0, 3, 0])).toBe(2)
  })
})
