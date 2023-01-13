import { LinkedListNode } from '../LinkedListNode'

export function removeLinkedListElements(head: LinkedListNode | undefined, val: number): LinkedListNode | undefined {
  // 创建虚拟节点保存head指针
  const dummy = new LinkedListNode(-1)
  let cur = dummy
  // 遍历链表
  while (head) {
    // 不相同
    if (head.elem !== val) {
      // 删除节点
      cur.next = head
      cur = cur.next
    }
    head = head.next
  }
  // 移除多余节点
  cur.next = undefined
  return dummy.next
}
