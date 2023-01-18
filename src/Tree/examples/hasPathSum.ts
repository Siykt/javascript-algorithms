import { TreeNode } from '../TreeNode'

/**
 * 112. 路径总和
 * @param root 根节点
 * @param targetSum 目标值
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // 思路: DFS
  // 通过遍历至叶子结点计算是否存在路径

  // 注意边界
  if (!root) return false
  // 因为是递归函数, 此处即为叶子结点也就是最终判断的地方
  if (!root.left && !root.right) return root.val === targetSum
  // 当结束条件在最终判断的地方之后, 即为深度优先
  const sub = targetSum - root.val
  return hasPathSum(root.left, sub) || hasPathSum(root.right, sub)
}
