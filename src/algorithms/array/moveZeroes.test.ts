import { moveZeroes } from './moveZeroes'

describe('283. 移动零', () => {
  test('nums = [0,1,0,3,12]', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })

  test('nums = [0]', () => {
    const nums = [0]
    moveZeroes(nums)
    expect(nums).toEqual([0])
  })

  test('nums = [73348,66106,-85359,53996,18849,-6590,-53381,-86613,-41065,83457,0]', () => {
    const nums = [73348, 66106, -85359, 53996, 18849, -6590, -53381, -86613, -41065, 83457, 0]
    moveZeroes(nums)
    expect(nums).toEqual([73348, 66106, -85359, 53996, 18849, -6590, -53381, -86613, -41065, 83457, 0])
  })
})
