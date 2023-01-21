import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { TreeNode } from '../TreeNode'
import { populatingNextRightPointersInEachNode } from './populatingNextRightPointersInEachNode'

interface Node extends TreeNode {
  next: Node | null
  left: Node | null
  right: Node | null
}

describe('116. 填充每个节点的下一个右侧节点指针', () => {
  const helper = (root: Node) => {
    const queue: Node[] = [root]
    const res: (string | number)[] = []
    while (queue.length) {
      const node = queue.shift() as Node
      res.push(node.val)
      if (!node.next) res.push('#')
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return res
  }

  test('root = [1,2,3,4,5,6,7]', () => {
    const root = listToTreeByEffectiveNode([1, 2, 3, 4, 5, 6, 7]) as Node
    populatingNextRightPointersInEachNode(root)
    expect(helper(root)).toEqual([1, '#', 2, 3, '#', 4, 5, 6, 7, '#'])
  }, 300)

  test('root = [0]', () => {
    const root = listToTreeByEffectiveNode([0]) as Node
    populatingNextRightPointersInEachNode(root)
    expect(helper(root)).toEqual([0, '#'])
  }, 300)

  test('root = []', () => {
    expect(populatingNextRightPointersInEachNode(null)).toEqual(null)
  }, 300)
})
