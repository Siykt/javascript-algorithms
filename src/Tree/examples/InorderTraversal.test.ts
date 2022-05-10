import { inorderTraversal } from './InorderTraversal'
import { TreeNode } from '../TreeNode'

test('二叉树的中序遍历', () => {
  const data1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
  const data2 = new TreeNode(1)

  const result1 = [1, 3, 2]
  const result2 = [1]

  expect(inorderTraversal(data1)).toEqual(result1)
  expect(inorderTraversal(data2)).toEqual(result2)
  expect(inorderTraversal(null)).toEqual([])
})
