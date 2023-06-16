import { LinkedListNode } from '../LinkedListNode'

/**
 * 876. 链表的中间结点
 * @param head head节点
 * @returns
 */
export function removeDuplicatesFromSortedListII(head: LinkedListNode | undefined): LinkedListNode | undefined {
  // 双指针
  // 因为是排序过的linked, 所以相同的元素只会存在与当前的元素之后
  // 额外使用一个指针 p 查询后面是否存在相同元素
  const dummy = new LinkedListNode(-101)
  let cur = dummy
  let p = head
  while (p) {
    // 查找符合答案的最近值
    const val = p.elem
    let isEq = false
    while (p.next && p.next.elem === val) {
      p = p.next
      isEq = true
    }
    // 当存在相同的值时, 不能更新答案而是继续检查后续是否也是这种情况
    if (isEq) {
      p = p.next
    } else {
      cur.next = p
      cur = cur.next
      p = p.next
    }
  }
  // 存在链子不干净的情况
  cur.next = undefined
  return dummy.next
}
