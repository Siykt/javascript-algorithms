import { LinkedListNode } from './LinkedListNode'
import { LinkedListTraversalCallback } from './types'

/**
 * 双向链表
 */
export class DoubleLinkedList<Data = any> {
  head?: LinkedListNode<Data>
  tail?: LinkedListNode<Data>

  constructor(...elements: Data[]) {
    if (elements) {
      // 初始化时调用 shift 或 push 都可以实现
      elements.forEach((e) => this.append(e))
    }
  }

  /** 获取链表的长度, 此属性将会迭代链表请谨慎使用 */
  get length() {
    let cur = this.head
    let count = 0
    // 根据节点是否存在判断链表的长度
    while (cur) {
      count += 1
      cur = cur.next
    }
    return count
  }

  /**
   * 判断链表是否为空
   */
  isEmpty() {
    return !this.head
  }

  /**
   * 添加元素至链表的头部 {1} -> [{1}, {0}]
   * @param elem 元素
   */
  add(elem: Data) {
    const node = new LinkedListNode(elem)
    // 设置新节点的后继为原head节点
    node.next = this.head
    if (this.head) {
      // 设置原head节点的前驱为新节点
      this.head.pre = node
    }
    // 更新head节点
    this.head = node
    // 如果尾节点不存在则设置尾部节点
    if (!this.tail) {
      this.tail = node
    }
    return this
  }

  /**
   * 添加元素至链表的尾部 {1} -> [{0}, {1}]
   * @param elem 元素
   */
  append(elem: Data) {
    const node = new LinkedListNode(elem)
    // 如果链表为空, 添加至头部
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      if (this.tail) {
        // 设置原tail节点的后继为新节点
        this.tail.next = node
        // 设置新节点的前驱为原tail节点
        node.pre = this.tail
      }
      // 更新tail节点
      this.tail = node
    }
    return this
  }

  /**
   * 添加元素至链表的指定位置 {2},1 -> [{0}, {2}, {1}]
   * @param elem 元素
   * @param pos 元素坐标
   */
  inset(elem: Data, pos = 0) {
    // 若指定位置为第一个元素之前, 则执行头部插入
    if (pos <= 0) {
      this.add(elem)
    } else if (pos > this.length) {
      // 若指定位置为第一个元素之前, 则执行尾部插入
      this.append(elem)
    } else {
      const newNode = new LinkedListNode(elem)
      const oldNode = this.search(pos)
      // 查找到它的前一个节点进行操作
      const { pre } = oldNode
      if (pre) {
        // 更新前一个节点的后继为新节点
        pre.next = newNode
        // 更新新节点的前驱为前一个节点
        newNode.pre = pre
      }
      newNode.next = oldNode
      oldNode.pre = newNode
    }
    return this
  }

  /**
   * 从右侧(尾部)添加元素至链表的指定位置 {2},0 -> [{0}, {1}, {2}]
   * @param elem 元素
   * @param pos 元素坐标
   */
  insetRight(elem: Data, pos = 0) {
    // 若指定位置为第一个元素之前, 则执行尾部插入
    if (pos <= 0) {
      this.append(elem)
    } else if (pos > this.length) {
      // 若指定位置为最后一个元素之后, 则执行头部插入
      this.add(elem)
    } else {
      const newNode = new LinkedListNode(elem)
      const oldNode = this.searchRight(pos)
      // 查找到它的前一个节点进行操作
      const { pre } = oldNode
      if (pre) {
        // 更新前一个节点的后继为新节点
        pre.next = newNode
        // 更新新节点的前驱为前一个节点
        newNode.pre = pre
      }
      newNode.next = oldNode
      oldNode.pre = newNode
    }
    return this
  }

  /**
   * 根据位置查询元素
   * @param pos 元素坐标
   */
  search(pos: number) {
    let result: LinkedListNode<Data> | undefined
    // 如果输入的数小于等于 0, 返回 head
    if (pos <= 0) {
      result = this.head
    } else {
      result = this.head
      // 遍历节点获取位置
      while (pos--) result = result?.next
    }
    // 抛出索引超出错误
    if (!result) {
      throw new Error(`[DoubleLinkedList] 链表索引超出: ${pos}`)
    }
    return result
  }

  /**
   * 根据位置从右侧(尾部)查询元素
   * @param pos 元素坐标
   */
  searchRight(pos: number) {
    let result: LinkedListNode<Data> | undefined
    // 如果输入的数小于等于 0, 返回 tail
    if (pos <= 0) {
      result = this.tail
    } else {
      result = this.tail
      // 遍历节点获取位置
      while (pos--) result = result?.pre
    }
    // 抛出索引超出错误
    if (!result) {
      throw new Error(`[DoubleLinkedList] 链表索引超出: ${pos}`)
    }
    return result
  }

  /**
   * 根据位置删除元素
   * @param pos 坐标
   */
  remove(pos: number) {
    // 获取要删除的节点的上一个节点以便更新节点坐标
    const pre = this.search(pos - 1)
    const node = pre.next

    if (node) {
      // 当要删除的节点为尾节点时更新尾节点
      if (node === this.tail) {
        this.tail = pre
      }
      // 将上一个节点的next索引更新为删除节点的next索引
      pre.next = node.next
      return true
    }
    return false
  }

  /**
   * 根据位置从右侧(尾部)删除元素
   * @param pos 坐标
   */
  removeRight(pos: number) {
    // 获取要删除的节点的上一个节点以便更新节点坐标
    const pre = this.search(pos - 1)
    const node = pre.next

    if (node) {
      // 当要删除的节点为尾节点时更新尾节点
      if (node === this.tail) {
        this.tail = pre
      }
      // 将上一个节点的next索引更新为删除节点的next索引
      pre.next = node.next
      return true
    }
    return false
  }

  /**
   * 遍历链表
   * @param callbackfn 回调函数
   */
  map<Result>(callbackfn: LinkedListTraversalCallback<Data, Result>): Result[] {
    let cur = this.head
    let index = 0
    const result: Result[] = []
    while (cur) {
      result.push(callbackfn(cur.elem, index++, cur))
      cur = cur.next
    }
    return result
  }

  /**
   * 从右侧(尾部)遍历链表
   * @param callbackfn 回调函数
   */
  mapRight<Result>(callbackfn: LinkedListTraversalCallback<Data, Result>): Result[] {
    let cur = this.tail
    let index = 0
    const result: Result[] = []
    while (cur) {
      result.push(callbackfn(cur.elem, index++, cur))
      cur = cur.pre
    }
    return result
  }

  /**
   * 双向迭代
   * @param callbackfn 回调函数, 返回false停止循环
   */
  travelBidirectional(
    callbackfn: (startNode: LinkedListNode<Data>, endNode: LinkedListNode<Data> | undefined, count: number) => any,
  ) {
    let start = this.head
    let end = this.tail
    let count = 0
    while (start !== end && start && end) {
      if (callbackfn(start, end, count++) === false) {
        return
      }
      start = start?.next
      end = end?.pre
    }
    if (start && start.next === end) {
      callbackfn(start, undefined, count)
    } else if (end && end.pre === start) {
      callbackfn(end, undefined, count)
    }
  }
}
