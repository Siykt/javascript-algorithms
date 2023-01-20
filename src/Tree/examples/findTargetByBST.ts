import { TreeNode } from '../TreeNode'

/**
 * 653. 两数之和 IV - 输入二叉搜索树
 * @param root 根节点
 * @param k 目标值
 */
export function findTargetByBST(root: TreeNode | null, k: number): boolean {
  // 思路: 遍历 + hash
  if (!root) return false

  const hash = new Set<number>()
  const stack: TreeNode[] = [root]
  while (stack.length) {
    const cur = stack.pop() as TreeNode
    if (hash.has(k - cur.val)) return true
    hash.add(cur.val)
    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }
  return false
}
