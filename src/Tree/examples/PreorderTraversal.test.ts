import { preorderTraversal } from './PreorderTraversal'
import { TreeNode } from '../TreeNode'

test('二叉树的前序遍历', () => {
  const data1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
  const data2 = new TreeNode(1)

  const result1 = [1, 2, 3]
  const result2 = [1]

  expect(preorderTraversal(data1)).toEqual(result1)
  expect(preorderTraversal(data2)).toEqual(result2)
  expect(preorderTraversal(null)).toEqual([])
})
