import { TreeNode } from '../TreeNode'

/**
 * 226. 翻转二叉树
 * @param root 根结点
 */
export function invertBinaryTree(root: TreeNode | null): TreeNode | null {
  // 思路: BFS + 层序遍历

  if (!root) return null

  // 层序遍历模版
  const stack: TreeNode[] = [root]
  while (stack.length) {
    const node = stack.pop() as TreeNode
    const temp = node.right
    // 交换节点
    node.right = node.left
    node.left = temp
    // 入栈
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return root
}
