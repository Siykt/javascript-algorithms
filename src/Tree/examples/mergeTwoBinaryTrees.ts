import { TreeNode } from '../TreeNode'

/**
 * 617. 合并二叉树
 * @param root1 根节点1
 * @param root2 根节点2
 */
export function mergeTwoBinaryTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  // 思路: DFS
  // 取root1为基准合并root2

  // 边界
  if (!root1) return root2
  if (!root2) return root1

  const stack: [TreeNode, TreeNode][] = [[root1, root2]]
  while (stack.length) {
    const [r1, r2] = stack.pop() as [TreeNode, TreeNode]
    r1.val += r2.val
    // 入栈
    if (r1.left && r2.left) {
      stack.push([r1.left, r2.left])
    }
    if (r1.right && r2.right) {
      stack.push([r1.right, r2.right])
    }
    // 插入
    if (!r1.left) {
      r1.left = r2.left
    }
    if (!r1.right) {
      r1.right = r2.right
    }
  }
  return root1
}
