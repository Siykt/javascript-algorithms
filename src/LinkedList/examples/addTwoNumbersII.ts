import { LinkedListNode } from '../LinkedListNode'
import { addTwoNumbers } from './AddTwoNumbers'
import { reverseList } from './ReverseLinkedList'

type ListNode = LinkedListNode<number> | undefined

/**
 * 445. 两数相加 II
 * @param l1 链表
 * @param l2 链表
 */
export function addTwoNumbersII(l1?: ListNode, l2?: ListNode): ListNode | undefined {
  // 反转链表 + 两数之和
  l1 = reverseList(l1 as LinkedListNode)
  l2 = reverseList(l2 as LinkedListNode)
  return reverseList(addTwoNumbers(l1, l2))
}
