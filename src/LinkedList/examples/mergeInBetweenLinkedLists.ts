import { LinkedListNode } from '../LinkedListNode'

/**
 * 1669. 合并两个链表
 * @param list1 节点1
 * @param a 位置a
 * @param b 位置b
 * @param list2 节点2
 */
export function mergeInBetweenLinkedLists(
  list1: LinkedListNode,
  a: number,
  b: number,
  list2: LinkedListNode,
): LinkedListNode | undefined {
  // 模拟

  const head = list1
  let count = b - a + 2
  while (list1.next && --a > 0) {
    list1 = list1.next
  }
  // 此时 list1 指向 a - 1
  // 我们模拟获取 b + 1的位置
  let last = list1
  while (last.next && count--) {
    last = last.next
  }
  // 再获取list2的尾巴
  let tail = list2
  while (tail.next) {
    tail = tail.next
  }
  // 拼接
  list1.next = list2
  tail.next = last
  return head
}
