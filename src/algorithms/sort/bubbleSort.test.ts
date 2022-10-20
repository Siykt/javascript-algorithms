import { bubbleSort, bubbleSortByRecursion } from './bubbleSort'

describe('冒泡排序', () => {
  test('输入: [1, 5, 2, 4, 3]', () => {
    expect(bubbleSort([1, 5, 2, 4, 3])).toEqual([1, 2, 3, 4, 5])
  })

  test('输入: [5, 4, 3, 2, 1]', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  describe('边界测试', () => {
    test('输入: []', () => {
      expect(bubbleSort([])).toEqual([])
    })

    test('输入: [1]', () => {
      expect(bubbleSort([1])).toEqual([1])
    })
  })
})

describe('冒泡排序 (内部递归版) ', () => {
  test('输入: [1, 5, 2, 4, 3]', () => {
    expect(bubbleSortByRecursion([1, 5, 2, 4, 3])).toEqual([1, 2, 3, 4, 5])
  })

  test('输入: [5, 4, 3, 2, 1]', () => {
    expect(bubbleSortByRecursion([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  describe('边界测试', () => {
    test('输入: []', () => {
      expect(bubbleSortByRecursion([])).toEqual([])
    })

    test('输入: [1]', () => {
      expect(bubbleSortByRecursion([1])).toEqual([1])
    })
  })
})
