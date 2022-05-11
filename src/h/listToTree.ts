import { TreeNode } from '../Tree/TreeNode'

type List = (number | null)[] | null

/**
 * 将一个非空的数组根据层序的方式转换为一个树
 * @param list 要转换的列表
 */
export function listToTreeByLevelOrder(list: List): TreeNode | null {
  if (list === null || list[0] === null || list[0] === undefined) {
    return null
  }
  // 避免修改原数组
  list = list.slice()
  // 创建根节点
  const root = new TreeNode(list.shift() as number)
  let depth = 1
  let nodeList: (TreeNode | null)[] = [root]
  while (list.length) {
    // 根据满二叉树的性质 满二叉树中第 i 层的节点数为 2 ** (i - 1) 个进行计算
    const level = 2 ** depth
    const nextNodeList: (TreeNode | null)[] = []
    for (let i = 0; i < level; i++) {
      const cur = list.shift()
      if (cur === undefined) break
      if (cur !== null) {
        const curNode = nodeList[Math.floor(i / 2)]
        if (!curNode) {
          throw new Error('非法输入')
        }
        const node = new TreeNode(cur)
        nextNodeList.push(node)
        if (i % 2) {
          curNode.right = node
        } else {
          curNode.left = node
        }
      } else {
        nextNodeList.push(null)
      }
    }
    nodeList = nextNodeList
    depth++
  }
  return root
}
