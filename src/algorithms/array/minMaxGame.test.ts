import { minMaxGame } from './minMaxGame'

describe('2293. 极大极小游戏', () => {
  test('nums = [1,3,5,2,4,8,2,2]', () => {
    expect(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])).toBe(1)
  })

  test('nums = [3]', () => {
    expect(minMaxGame([3])).toBe(3)
  })

  test('nums = [70,38,21,22]', () => {
    expect(minMaxGame([70, 38, 21, 22])).toBe(22)
  })
})
