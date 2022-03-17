/**
 * 树节点
 *
 * 树节点同链表节点类似, 也是由两大部分组成
 * 一个是用于存储数据的 <元素域>
 * 一个是用于存储指针信息的 <链接域>
 */
export interface TreeNode<Data = number> {
  // -- 元素域 --
  /** 保存的数据 */
  val: Data

  // -- 链接域 --
  /** 指向左边的子元素 */
  left: TreeNode<Data> | null
  /** 指向右边的子元素 */
  right: TreeNode<Data> | null
}

export class TreeNode<Data = number> {
  constructor(
    public val: Data,
    public left: TreeNode<Data> | null = null,
    public right: TreeNode<Data> | null = null,
  ) {}
}
