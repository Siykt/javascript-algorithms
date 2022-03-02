import { LinkedListNode } from '../LinkedListNode'

/**
 * 合并两个有序链表为一个新的升序链表
 * @param list1 有序列表1
 * @param list2 有序列表2
 */
export function mergeTwoSortedLists(
  list1?: LinkedListNode<number>,
  list2?: LinkedListNode<number>,
): LinkedListNode<number> | undefined {
  // 创建虚拟节点保存head指针
  const dummy = new LinkedListNode(-1)
  let cur = dummy
  while (list1 && list2) {
    // 循环比较 list1 与 list2 的大小
    // 并将小的一方挂载至cur.next上以保证“升序”的返回结果
    // ? 如果需要降序结果只需调整判断的逻辑为小于
    if (list1.elem > list2.elem) {
      cur.next = list2
      list2 = list2.next
    } else {
      cur.next = list1
      list1 = list1.next
    }
    // 更新当前节点(cur)为后继节点
    cur = cur.next
  }
  // 到此只存在单个有效的链了, 直接将其挂载至当前节点的后继
  cur.next = list1 || list2
  // 返回虚拟head节点中保存的实际head节点
  return dummy.next
}
