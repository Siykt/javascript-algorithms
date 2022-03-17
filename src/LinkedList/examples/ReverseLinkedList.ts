import { LinkedListNode } from '../LinkedListNode'

type ListNode = LinkedListNode<number> | undefined

/**
 * 反转链表
 * @param head 链表
 */
export function reverseList(head?: ListNode): ListNode {
  // 三指针操作节点, pre 用于保存上一个节点的信息, next用于临时保存下一个节点的信息
  let pre = undefined
  let cur = head
  // 假设 head = [1, 2, 3, 4, 5]
  while (cur) {
    // 此时 cur(当前节点) = [1, 2, 3, 4, 5], pre(上一个节点) = null, next(下一个节点) = [2, 3, 4, 5]
    const next = cur.next
    // 将 cur 的 下一个节点更新为 pre 就可以得倒一个 [1, null] 的链表
    // 下次迭代即为 node([2, 3, 4, 5]).next = pre([1, null]) = [2, 1, null]
    cur.next = pre
    // 再将 [1, null] 保存至 pre
    // 重复即可得 [2, 1, null], [3, 2, 1, null], [4, 3, 2, 1, null], [5, 4, 3, 2, 1, null]
    pre = cur
    // 最后更新 cur 为 next (即 [2, 3, 4, 5])
    cur = next
  }
  return pre
}
