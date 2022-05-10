import { postorderTraversal } from './PostorderTraversal'
import { TreeNode } from '../TreeNode'

test('二叉树的后序遍历', () => {
  const data1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
  const data2 = new TreeNode(1)

  const result1 = [3, 2, 1]
  const result2 = [1]

  expect(postorderTraversal(data1)).toEqual(result1)
  expect(postorderTraversal(data2)).toEqual(result2)
  expect(postorderTraversal(null)).toEqual([])
})
