import { peakIndexInMountainArray } from './peakIndexInMountainArray'

describe('852. 山脉数组的峰顶索引', () => {
  test('[18,29,38,59,98,100,99,98,90] ', () => {
    expect(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90])).toBe(5)
  })

  test('[0,1,0] ', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
  })
})
