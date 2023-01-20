import { TreeNode } from '../TreeNode'

/**
 * 235. 二叉搜索树的最近公共祖先
 * @param root 根节点
 * @param p p节点
 * @param q q节点
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // 思路: 递归
  if (!root || !p || !q) return null

  // 如果p和q分别在r两侧，那么r就是答案
  if ((root.val - p.val) * (root.val - q.val) <= 0) return root
  // 否则, p和q位于root的同一侧继续往下找
  return lowestCommonAncestor(p.val < root.val ? root.left : root.right, p, q)
}
