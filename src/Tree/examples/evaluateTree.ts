import { TreeNode } from '../TreeNode'

/**
 * 2331. 计算布尔二叉树的值
 * @param root 根节点
 */
export function evaluateTree(root: TreeNode | null): boolean {
  // 递归
  if (!root) return false
  // 检查是否为叶子结点, 完整二叉树只需检查一侧即可
  if (root.left === null) return root.val === 1
  // 否则递归检查子节点
  // 检查是否为 OR 型判断
  if (root.val === 2) return evaluateTree(root.left) || evaluateTree(root.right)
  // 检查是否为 AND 型判断
  return evaluateTree(root.left) && evaluateTree(root.right)
}
