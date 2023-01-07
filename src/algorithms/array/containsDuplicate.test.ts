import { containsDuplicate } from './containsDuplicate'

describe('存在重复元素', () => {
  test('[1, 2, 3, 1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  })

  test('[1, 2, 3, 4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })

  test('[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  })
})
