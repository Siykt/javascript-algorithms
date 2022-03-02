import { LinkedListNode } from '../LinkedListNode'

/**
 * 删除已排序的链表的重复项 (方法一)
 * @param head 有序列表
 */
export function deleteDuplicates(head?: LinkedListNode<number>): LinkedListNode<number> | undefined {
  if (!head) {
    return head
  }
  // 创建一个移动的指针用于更新链表
  let cur = head
  // TODO 当值域相等时抛弃该节点, 否则更新当前节点为后继节点
  while (cur.next) {
    if (cur.elem === cur.next.elem) {
      // 抛弃节点 cur.next
      cur.next = cur.next.next
    } else {
      // 更新当前节点为后继节点
      cur = cur.next
    }
  }
  return head
}

/**
 * 删除已排序的链表的重复项 (方法二)
 * @param head 有序列表
 */
export function deleteDuplicates2(head?: LinkedListNode<number>): LinkedListNode<number> | undefined {
  if (!head) {
    return head
  }
  // 创建虚拟节点保存head指针
  const dummy = new LinkedListNode(Number.MIN_VALUE)
  let cur = dummy
  // TODO 当值域不相等时添加该节点并更新节点指针为后继节点, 否则更新当前节点为后继节点
  while (head) {
    if (cur.elem !== head.elem) {
      // 添加该节点并更新节点指针为后继节点
      cur.next = head
      cur = cur.next
    }
    // 更新当前节点为后继节点
    head = head.next
  }
  // 移除多余节点
  cur.next = undefined
  return dummy.next
}

/**
 * 删除已排序的链表的重复项 (方法三)
 * @param head 有序列表
 */
export function deleteDuplicates3(head?: LinkedListNode<number>): LinkedListNode<number> | undefined {
  if (!head || !head.next) {
    return head
  }
  // TODO 递归更新后继节点, 当值域相等时抛弃该节点
  head.next = deleteDuplicates3(head.next)
  if (head.elem === head.next?.elem) {
    // 抛弃节点
    head = head.next
  }
  return head
}
