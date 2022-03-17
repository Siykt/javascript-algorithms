import { TreeNode } from './TreeNode'

test('链表节点的基本测试', () => {
  expect(new TreeNode('init').val).toBe('init')

  /**
         1
       /  \
      2    3
    / \   / \
   4  5  6  7
  */
  const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  )

  expect(tree.left?.val).toBe(2)
  expect(tree.right?.val).toBe(3)
  expect(tree.left?.left?.val).toBe(4)
  expect(tree.left?.right?.val).toBe(5)
  expect(tree.right?.left?.val).toBe(6)
  expect(tree.right?.right?.val).toBe(7)
})
