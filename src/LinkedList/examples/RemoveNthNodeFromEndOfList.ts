import { LinkedListNode } from '../LinkedListNode'

type ListNode = LinkedListNode<number> | undefined

/**
 * 删除链表的倒数第 N 个结点
 * @param head 列表
 * @param n 倒数的节点数
 */
export function removeNthNodeFromEndOfList(head: ListNode, n: number): ListNode {
  // 倒数第 n 个节点也就是正数第 len - n 个节点
  // 而删除此节点需要获取其前一个节点的位置
  // 所以我们让指针 p1 先走 n + 1 步
  // 剩下的路程就是 len - n - 1
  // 也就是倒数第n个节点的前一个节点

  // 创建虚拟头节点用于处理边界问题
  const dummy = new LinkedListNode(-1)
  dummy.next = head
  // 让指针p1先走 n + 1 步
  let p1: ListNode = dummy
  for (let i = n + 1; i > 0; i--) {
    p1 = p1?.next
  }
  // 再让指针p2跟随p1一起走 len - n - 1 找到倒数第n个节点的
  let p2: ListNode = dummy
  while (p1) {
    p1 = p1.next
    p2 = p2?.next
  }
  if (p2) {
    p2.next = p2.next?.next
  }
  return dummy.next
}
