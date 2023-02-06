import { rob } from './rob'

describe('198. 打家劫舍', () => {
  test('[1,2,3,1]', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
  }, 300)

  test('[2,7,9,3,1]', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12)
  }, 300)
})
