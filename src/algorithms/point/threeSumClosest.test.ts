import { threeSumClosest } from './threeSumClosest'

describe('最接近的三数之和', () => {
  test('[-1,0,1,2,-1,-4]', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
  })

  test('[0,0,0]', () => {
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
  })

  test('[0,1,2]', () => {
    expect(threeSumClosest([0, 1, 2], 0)).toBe(3)
  })
})
