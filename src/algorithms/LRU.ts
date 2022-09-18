// 双向链表, 用于实现插入 O(1), 删除 O(1)
class LinkedNode<Data = any> {
  val: Data
  key: string
  next: LinkedNode<Data> | null
  pre: LinkedNode<Data> | null

  constructor(key: string, val: Data) {
    this.val = val
    this.key = key
    this.next = null
    this.pre = null
  }
}

// LRU缓存算法
export default class LRU<Data = any> {
  // 保存最早的数据也就是即将删除的数据
  private head = new LinkedNode<Data | null>('__head__', null)

  // 保存最新的数据
  private tail = new LinkedNode<Data | null>('__tail__', null)

  // HashMap, 用于实现读取 O(1), 提升缓存项随机访问性能
  private hashmap: Record<string, LinkedNode<Data>> = {}
  private length = 0

  constructor(
    // 缓存容量
    private capacity: number,
  ) {
    if (capacity <= 0) throw TypeError('无效容量')
    this.head.next = this.tail
    this.tail.pre = this.head
  }

  /**
   * 从缓存中获取key对应的值，若未命中则返回 null
   * @param key 键
   */
  get(key: string) {
    const entry = this.hashmap[key]
    if (entry) {
      this.popToTail(entry)
      return entry.val
    }
    return null
  }

  /**
   * 向缓存中插入或更新值
   * @param key 键
   * @param value 值
   * @returns
   */
  put(key: string, value: Data) {
    let isAdd = false
    let entry = this.hashmap[key]
    // 判断是否为更新
    if (!entry) {
      isAdd = true
      entry = new LinkedNode(key, value)
    }
    entry.val = value
    this.popToTail(entry)
    this.hashmap[key] = entry
    // 移除多余长度的head
    if (!isAdd) return
    if (this.length === this.capacity) {
      const needDelHead = this.head
      if (needDelHead.next) {
        needDelHead.next.pre = null
        this.head = needDelHead.next
      }
      delete this.hashmap[needDelHead.key]
    } else {
      this.length++
    }
  }

  /**
   * 将结点移动到tail
   * @param node 节点
   * @returns
   */
  private popToTail(node: LinkedNode<Data | null>) {
    // 更新缓存的位置至tail
    const nodePre = node.pre
    // 删除node
    if (nodePre) {
      nodePre.pre = node.next
    }
    // 插入node至tail
    this.tail.next = node
    node.pre = this.tail
    // 更新head
    if (this.tail.pre?.key === '__head__') {
      this.head = node
    }
    // 更新tail
    this.tail = node
  }
}
