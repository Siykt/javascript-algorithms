import { removeDuplicates } from './removeDuplicates'

describe('删除有序数组中的重复项', () => {
  test('[1, 1, 2]', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2)
  })

  test('[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })

  test('[]', () => {
    expect(removeDuplicates([])).toBe(0)
  })

  test('[1]', () => {
    expect(removeDuplicates([1])).toBe(1)
  })
})
