import { threeSum } from './threeSum'

describe('三数之和', () => {
  test('[-1,0,1,2,-1,-4]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual<number[][]>(
      expect.arrayContaining([expect.arrayContaining([-1, -1, 2]), expect.arrayContaining([-1, 0, 1])]),
    )
  })

  test('[0,1,1]', () => {
    expect(threeSum([0, 1, 1])).toEqual<number[][]>([])
  })

  test('[0,0,0]', () => {
    expect(threeSum([0, 0, 0])).toEqual<number[][]>([[0, 0, 0]])
  })
})
