import { selectionSort } from './selectionSort'

describe('冒泡排序', () => {
  test('输入: [1, 5, 2, 4, 3]', () => {
    expect(selectionSort([1, 5, 2, 4, 3])).toEqual([1, 2, 3, 4, 5])
  })

  test('输入: [5, 4, 3, 2, 1]', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  describe('边界测试', () => {
    test('输入: []', () => {
      expect(selectionSort([])).toEqual([])
    })

    test('输入: [1]', () => {
      expect(selectionSort([1])).toEqual([1])
    })
  })
})
