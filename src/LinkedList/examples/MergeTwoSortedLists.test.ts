import { mergeTwoSortedLists } from './MergeTwoSortedLists'
import { SingleLinkedList } from '../SingleLinkedList'

test('测试用例', () => {
  const list1 = new SingleLinkedList(1, 3, 5, 6)
  const list2 = new SingleLinkedList(2, 3, 4, 7, 8)

  expect(mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(
    new SingleLinkedList(1, 2, 3, 3, 4, 5, 6, 7, 8).head,
  )
})
