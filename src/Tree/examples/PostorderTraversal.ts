import { TreeNode } from '../TreeNode'

/**
 * 二叉树的后序遍历
 * @param root 根节点
 */
export function postorderTraversal(root: TreeNode | null) {
  let res: number[] = []
  if (root) {
    if (root.left) {
      res = res.concat(postorderTraversal(root.left))
    }
    if (root.right) {
      res = res.concat(postorderTraversal(root.right))
    }
    // 在遍历完所有节点之后 提交 val 就是后序遍历
    res.push(root.val)
  }
  return res
}
