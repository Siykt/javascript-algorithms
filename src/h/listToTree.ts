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

/**
 * 将一个非空的数组根据有效元素的方式转换为一个树
 * @param list 要转换的列表
 */
export function listToTreeByEffectiveNode(list: List): TreeNode | null {
  if (list === null || list[0] === null || list[0] === undefined) {
    return null
  }
  // 避免修改原数组
  list = list.slice()
  // 创建根节点
  const root = new TreeNode(list.shift() as number)
  // 使用一个栈来记录当前节点的子节点
  const nodeList: TreeNode[] = [root]
  while (nodeList.length) {
    // 取出栈顶元素
    const curNode = nodeList.shift() as TreeNode
    // 取出左子树的元素
    const leftVal = list.shift()
    if (leftVal !== undefined && leftVal !== null) {
      const leftNode = new TreeNode(leftVal)
      curNode.left = leftNode
      // 将有效的元素放入栈中
      nodeList.push(leftNode)
    }
    // 取出右子树的元素
    const rightVal = list.shift()
    if (rightVal !== undefined && rightVal !== null) {
      const rightNode = new TreeNode(rightVal)
      curNode.right = rightNode
      nodeList.push(rightNode)
    }
  }
  return root
}
