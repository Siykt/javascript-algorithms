/**
 * 链表节点
 *
 * 链表节点由两个部分组成
 * 一个是用于存储数据的 <元素域>
 * 一个是用于存储指针信息的 <链接域>
 */
export interface LinkedListNode<Data = any> {
  // -- 元素域 --
  /** 保存的数据 */
  elem: Data

  // -- 链接域 --
  /** 指向下一个元素 */
  next?: LinkedListNode<Data>
  /** 指向上一个元素 */
  pre?: LinkedListNode<Data>
}

export class LinkedListNode<Data = any> {
  constructor(public elem: Data, public next?: LinkedListNode<Data>, public pre?: LinkedListNode<Data>) {}
}
