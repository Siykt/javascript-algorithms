import { LinkedListNode } from '../LinkedListNode'

export function linkedListCycle(head: LinkedListNode | undefined): boolean {
  // 思路: 双指针, 快慢指针

  // 边界
  if (!head || !head.next) return false

  // 慢指针
  let slow: LinkedListNode | undefined = head
  // 快指针
  let fast: LinkedListNode | undefined = head.next
  // 如果快指针等于慢指针时, 说明链表中存在环
  while (slow !== fast) {
    // 快指针能够遍历结束说明链表中不可能存在环
    if (!fast || !fast.next || !slow) {
      return false
    }
    // 快指针推进2个节点
    fast = fast.next.next
    // 慢指针推进2个节点
    slow = slow.next
  }
  return true
}
