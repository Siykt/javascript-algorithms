import { TreeNode } from '../TreeNode'

type TreeNodeOrNull = TreeNode | null

/**
 * 101. 对称二叉树
 * @param root 根结点
 */
export function symmetricTree(root: TreeNodeOrNull): boolean {
  // 思路: BFS
  // 最左与最右比较
  if (!root) return false

  const stack: [TreeNodeOrNull, TreeNodeOrNull][] = [
    // 初始化双节点
    [root.left, root.right],
  ]

  while (stack.length) {
    const [left, right] = stack.pop() as [TreeNodeOrNull, TreeNodeOrNull]
    // 跳过双方都是空节点的情况
    if (!left && !right) continue
    // 判断节点是否存在与值是否相等
    if (!left || !right || left.val !== right.val) {
      return false
    }
    // 入栈
    // 提交左右节点
    stack.push([left.left, right.right])
    // 提交右左节点
    stack.push([left.right, right.left])
  }
  return true
}
