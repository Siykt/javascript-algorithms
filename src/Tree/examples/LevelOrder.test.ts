import { levelOrder } from './LevelOrder'
import { TreeNode } from '../TreeNode'

test('二叉树的层序遍历', () => {
  const data1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
  const data2 = new TreeNode(1)

  const result1 = [[1], [2, 3], [4, 5]]
  const result2 = [[1]]

  expect(levelOrder(data1)).toEqual(result1)
  expect(levelOrder(data2)).toEqual(result2)
  expect(levelOrder(null)).toEqual([])
})
