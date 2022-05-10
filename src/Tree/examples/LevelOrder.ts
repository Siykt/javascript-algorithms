import { TreeNode } from '../TreeNode'

/**
 * 二叉树的层序遍历
 * @param root 根节点
 */
export function levelOrder(root: TreeNode | null): number[][] {
  // 最终结果的二维数组
  const res: number[][] = []
  if (!root) return res
  // 暂存节点的队列, 也就是当前层的队列
  const q: TreeNode[] = [root] // 初始化时先将 root 添加进队列中
  while (q.length) {
    // 当前层的值数组
    const curVal: number[] = []
    // 遍历当前层, 因为会动态操作 q 队列, 所以需要使用 for 循环
    const { length } = q
    for (let i = 0; i < length; i++) {
      // 此处不可能存在 q.shift() 返回 undefined 的情况
      const cur = q.shift() as TreeNode
      // 提交当前节点的值
      curVal.push(cur.val)
      // 先提交left并使用使用shift即为从左到右的提交顺序
      if (cur.left) q.push(cur.left)
      if (cur.right) q.push(cur.right)
    }
    res.push(curVal)
  }
  return res
}
