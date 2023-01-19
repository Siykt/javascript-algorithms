import { TreeNode } from '../TreeNode'

/**
 * 701. 二叉搜索树中的插入操作
 * @param root 根节点
 * @param val 插入的值
 */
export function insertIntoABinarySearchTree(root: TreeNode | null, val: number): TreeNode | null {
  // 思路: 递归形式
  // 其实和searchBST差不多, 只要找到一个合适的位置即可

  // 返回插入合适位置的值
  if (!root) return new TreeNode(val)
  // 当前节点小于根节点则插入左侧, 否侧则插入右侧
  if (root.val > val) {
    root.left = insertIntoABinarySearchTree(root.left, val)
  } else {
    root.right = insertIntoABinarySearchTree(root.right, val)
  }
  // 最终返回根节点
  return root
}
