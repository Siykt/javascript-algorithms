import {
  findTheDistanceValueBetweenTwoArraysByAC,
  findTheDistanceValueBetweenTwoArraysByBS,
} from './findTheDistanceValueBetweenTwoArrays'

describe('1385. 两个数组间的距离值 模拟', () => {
  test('arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2', () => {
    expect(findTheDistanceValueBetweenTwoArraysByAC([4, 5, 8], [0, 9, 1, 8], 2)).toBe(2)
  })

  test('arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3', () => {
    expect(findTheDistanceValueBetweenTwoArraysByAC([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2)
  })

  test('arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6', () => {
    expect(findTheDistanceValueBetweenTwoArraysByAC([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1)
  })
})

describe('1385. 两个数组间的距离值 二分', () => {
  test('arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2', () => {
    expect(findTheDistanceValueBetweenTwoArraysByBS([4, 5, 8], [0, 9, 1, 8], 2)).toBe(2)
  })

  test('arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3', () => {
    expect(findTheDistanceValueBetweenTwoArraysByBS([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(2)
  })

  test('arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6', () => {
    expect(findTheDistanceValueBetweenTwoArraysByBS([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(1)
  })
})
