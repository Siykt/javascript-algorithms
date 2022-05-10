import { TreeNode } from '../TreeNode'

/**
 * 二叉树的中序遍历
 * @param root 根节点
 */
export function inorderTraversal(root: TreeNode | null) {
  let res: number[] = []
  if (root) {
    if (root.left) {
      res = res.concat(inorderTraversal(root.left))
    }
    // 在遍历 right 节点之前 提交 val 就是中序遍历
    res.push(root.val)
    if (root.right) {
      res = res.concat(inorderTraversal(root.right))
    }
  }
  return res
}
