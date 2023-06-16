import { removeDuplicatesFromSortedListII } from './removeDuplicatesFromSortedListII'
import { SingleLinkedList } from '../SingleLinkedList'

describe('82. 删除排序链表中的重复元素 II', () => {
  const gen = (data: number[]) => new SingleLinkedList(...data).head
  test('head = [1,2,3,3,4,4,5]', () => {
    expect(removeDuplicatesFromSortedListII(gen([1, 2, 3, 3, 4, 4, 5]))).toEqual(gen([1, 2, 5]))
  }, 300)

  test('head = [1,1,1,2,3]', () => {
    expect(removeDuplicatesFromSortedListII(gen([1, 1, 1, 2, 3]))).toEqual(gen([2, 3]))
  }, 300)

  test('head = [1,2,2]', () => {
    expect(removeDuplicatesFromSortedListII(gen([1, 2, 2]))).toEqual(gen([1]))
  }, 300)
})
