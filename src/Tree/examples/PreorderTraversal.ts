import { TreeNode } from '../TreeNode'

/**
 * 二叉树的前序遍历
 * @param root 根节点
 */
export function preorderTraversal(root: TreeNode | null) {
  let res: number[] = []
  if (root) {
    // 在遍历完所有节点之前 提交 val 就是后序遍历
    res.push(root.val)
    if (root.left) {
      res = res.concat(preorderTraversal(root.left))
    }
    if (root.right) {
      res = res.concat(preorderTraversal(root.right))
    }
  }
  return res
}
