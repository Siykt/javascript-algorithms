import { LinkedListNode } from '../LinkedListNode'

/**
 * 合并两个链表将其值域相加并返回为一个新的链表
 * @param l1 有序列表1
 * @param l2 有序列表2
 */
export function addTwoNumbers(
  l1?: LinkedListNode<number>,
  l2?: LinkedListNode<number>,
): LinkedListNode<number> | undefined {
  // 创建虚拟节点保存head指针
  const dummy = new LinkedListNode(-1)
  let cur = dummy
  let nextNum = 0
  // 循环相加两个链表的值, 并用 0 补位
  while (l1 || l2) {
    // 如果链表不相同时, 使用 0 补位 (任意一个实数 + 0等于其本身)
    const v1 = l1 ? l1.elem : 0
    const v2 = l2 ? l2.elem : 0
    // 两数相加并且添加可能存在的进位
    const addNum = v1 + v2 + nextNum
    cur.next = new LinkedListNode(addNum % 10)
    // 计算进位
    nextNum = addNum >= 10 ? 1 : 0
    // 更新节点
    l1 = l1?.next
    l2 = l2?.next
    cur = cur.next
  }
  if (nextNum) {
    cur.next = new LinkedListNode(nextNum)
  }
  return dummy.next
}
