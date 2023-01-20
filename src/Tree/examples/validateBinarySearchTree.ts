import { TreeNode } from '../TreeNode'

// 需要一个辅助函数实现递归
function helper(root: TreeNode | null, lower: number, upper: number): boolean {
  if (!root) return true

  // 判断是否合理
  if (root.val <= lower || root.val >= upper) {
    return false
  }
  // 左侧更新最大值, 右侧更新最小值, 限制其大小
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}

/**
 * 98. 验证二叉搜索树
 * @param root 根节点
 */
export function validateBinarySearchTreeByRecursion(root: TreeNode | null): boolean {
  return helper(root, -Infinity, Infinity)
}
