import { TreeNode } from '../TreeNode'

/**
 * 求树的最大深度, 使用内部递归的方式
 * @param root 根节点
 */
export function maxDepthUseTraverse(root: TreeNode | null): number {
  let res = 0
  let depth = 0
  // 内部遍历框架
  function traverse(node: TreeNode | null) {
    if (!node) {
      // 更新最大深度
      res = Math.max(depth, res)
      return
    }
    // 入栈
    depth++
    traverse(node.left)
    traverse(node.right)
    // 出栈
    depth--
  }
  traverse(root)
  return res
}

/**
 * 求树的最大深度, 使用分解问题成计算左右子树高度的方式
 * @param root 根节点
 */
export function maxDepthUseDecomposition(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  // 获取左子树的最大深度
  const leftMaxDepth = maxDepthUseDecomposition(root.left)
  // 获取右子树的最大深度
  const rightMaxDepth = maxDepthUseDecomposition(root.right)
  // 比较它们并加上根节点
  return Math.max(leftMaxDepth, rightMaxDepth) + 1
}

/**
 * 计算最深 DOM 节点树的深度
 * @param root 根节点
 */
export function maxDepthForElement(root: Element): number {
  if (!root.children.length) {
    return 0
  }
  // 比较它们并加上根节点
  return Math.max(...[...root.children].map((children) => maxDepthForElement(children))) + 1
}
