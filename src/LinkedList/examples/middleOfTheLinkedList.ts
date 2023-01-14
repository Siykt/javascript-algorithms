import { LinkedListNode } from '../LinkedListNode'

/**
 * 876. 链表的中间结点
 * @param head head节点
 * @returns
 */
export function middleOfTheLinkedList(head: LinkedListNode | undefined): LinkedListNode | undefined {
  // 思路: 双指针 快慢指针
  let fast = head
  let slow = head
  while (fast?.next) {
    // 快指针推进2步
    fast = fast.next.next
    // 慢指针推进1步
    slow = (slow as LinkedListNode).next
  }
  return slow
}
