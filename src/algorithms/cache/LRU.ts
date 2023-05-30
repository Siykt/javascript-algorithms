// 双向链表, 用于实现插入 O(1), 删除 O(1)
class LinkedNode {
  val: number
  key: number
  next: LinkedNode | null
  pre: LinkedNode | null

  constructor(key: number, val: number) {
    this.val = val
    this.key = key
    this.next = null
    this.pre = null
  }
}

// LRU缓存算法
export default class LRUCache {
  // 保存最新的数据
  private head: LinkedNode | null = null

  // 保存最早的数据也就是即将删除的数据
  private tail: LinkedNode | null = null

  // HashMap, 用于实现读取 O(1), 提升缓存项随机访问性能
  private hashmap: Record<number, LinkedNode> = {}
  private length = 0

  constructor(
    // 缓存容量
    private capacity: number,
  ) {
    if (capacity <= 0) throw TypeError('无效容量')
  }

  /**
   * 从缓存中获取key对应的值，若未命中则返回 null
   * @param key 键
   */
  get(key: number) {
    const entry = this.hashmap[key]
    if (entry) {
      this.exchangeToHead(entry)
      return entry.val
    }
    return -1
  }

  /**
   * 向缓存中插入或更新值
   * @param key 键
   * @param value 值
   * @returns
   */
  put(key: number, value: number) {
    let isAdd = false
    let entry = this.hashmap[key]
    // 判断是否为更新
    if (!entry) {
      isAdd = true
      entry = new LinkedNode(key, value)
    }
    entry.val = value
    this.exchangeToHead(entry)
    this.hashmap[key] = entry
    // 移除多余长度的head
    if (!isAdd || !this.tail) return
    if (this.length === this.capacity) {
      delete this.hashmap[this.tail.key]
      if (this.tail.pre) {
        this.tail.pre.next = null
        this.tail = this.tail.pre
      }
    } else {
      this.length++
    }
  }

  /**
   * 将结点移动至head
   * @param node 节点
   * @returns
   */
  private exchangeToHead(node: LinkedNode) {
    if (node === this.head) return
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }
    // 移除node
    const pre = node.pre
    pre && (pre.next = node.next)
    node.next && (node.next.pre = pre)
    // 更新node至head
    node.next = this.head
    this.head.pre = node
    this.head = node
    // 更新tail
    if (node === this.tail) {
      this.tail = pre
    }
  }
}
