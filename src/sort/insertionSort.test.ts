import { insertionSort } from './insertionSort'

describe('插入排序', () => {
  test('输入: [1, 5, 2, 4, 3]', () => {
    expect(insertionSort([1, 5, 2, 4, 3])).toEqual([1, 2, 3, 4, 5])
  })

  test('输入: [5, 4, 3, 2, 1]', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  describe('边界测试', () => {
    test('输入: []', () => {
      expect(insertionSort([])).toEqual([])
    })

    test('输入: [1]', () => {
      expect(insertionSort([1])).toEqual([1])
    })
  })
})
