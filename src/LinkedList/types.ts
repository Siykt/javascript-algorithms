import { LinkedListNode } from './LinkedListNode'

/** 链表遍历的回调函数 */
export interface LinkedListTraversalCallback<Data, Result> {
  (
    /** 当前的节点的值 */
    value: Data,
    /** 当前的坐标 */
    index: number,
    /** 当前的节点 */
    node: LinkedListNode<Data>,
  ): Result
}
