import { TreeNode } from '../TreeNode'

interface Node extends TreeNode {
  next: Node | null
  left: Node | null
  right: Node | null
}

/**
 * 116. 填充每个节点的下一个右侧节点指针
 * @param root 根结点
 */
export function populatingNextRightPointersInEachNode(root: Node | null): Node | null {
  // 思路: BFS
  // 主要需要判断节点边界, 可以每次都清空一层队列的形式完成

  if (!root || !root.left || !root.right) return root

  const queue: Node[] = [root.left, root.right]
  while (queue.length) {
    // 获取当前层的队列长度
    const len = queue.length
    // 清空本层
    for (let i = 0; i < len; i++) {
      const node = queue.shift() as Node
      // 跳过队尾
      if (i < len - 1) {
        // 下一位即为队顶
        node.next = queue[0]
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return root
}
