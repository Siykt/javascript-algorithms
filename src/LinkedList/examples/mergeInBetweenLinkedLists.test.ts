import { mergeInBetweenLinkedLists } from './mergeInBetweenLinkedLists'
import { SingleLinkedList } from '../SingleLinkedList'
import { LinkedListNode } from '../LinkedListNode'

describe('1669. 合并两个链表', () => {
  test('list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]', () => {
    const list1 = new SingleLinkedList(0, 1, 2, 3, 4, 5)
    const list2 = new SingleLinkedList(1000000, 1000001, 1000002)
    expect(mergeInBetweenLinkedLists(list1.head as LinkedListNode, 3, 4, list2.head as LinkedListNode)).toEqual(
      new SingleLinkedList(0, 1, 2, 1000000, 1000001, 1000002, 5).head,
    )
  }, 300)

  test('list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]', () => {
    const list1 = new SingleLinkedList(0, 1, 2, 3, 4, 5, 6)
    const list2 = new SingleLinkedList(1000000, 1000001, 1000002, 1000003, 1000004)
    expect(mergeInBetweenLinkedLists(list1.head as LinkedListNode, 2, 5, list2.head as LinkedListNode)).toEqual(
      new SingleLinkedList(0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6).head,
    )
  }, 300)
})
