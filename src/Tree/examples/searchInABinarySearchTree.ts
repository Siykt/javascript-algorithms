import { TreeNode } from '../TreeNode'

/**
 * 700. 二叉搜索树中的搜索
 * @param root 根节点
 * @param val 值
 */
export function searchInABinarySearchTree(root: TreeNode | null, val: number): TreeNode | null {
  // 思路: 递归搜索
  if (!root) return null
  if (root.val === val) return root
  // 二叉搜索树中左节点小于均小于根节点所以当前条件应当返回右节点查询
  if (root.val < val) return searchInABinarySearchTree(root.right, val)
  // 否则即为大于当前节点, 所以返回左节点继续查询
  return searchInABinarySearchTree(root.left, val)
}
