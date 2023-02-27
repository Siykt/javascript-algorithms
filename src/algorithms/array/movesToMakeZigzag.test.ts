import { movesToMakeZigzag } from './movesToMakeZigzag'

describe('1144. 递减元素使数组呈锯齿状', () => {
  test('nums = [1,2,3]', () => {
    expect(movesToMakeZigzag([1, 2, 3])).toBe(2)
  }, 300)

  test('nums = [9,6,1,6,2]', () => {
    expect(movesToMakeZigzag([9, 6, 1, 6, 2])).toBe(4)
  }, 300)
})
