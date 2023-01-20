import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { TreeNode } from '../TreeNode'
import { lowestCommonAncestor } from './lowestCommonAncestor'

describe('235. 二叉搜索树的最近公共祖先', () => {
  test('root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', () => {
    const root = listToTreeByEffectiveNode([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    expect(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(8))?.val).toBe(6)
  })

  test('root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', () => {
    const root = listToTreeByEffectiveNode([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    expect(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4))?.val).toBe(2)
  })

  test('边界测试', () => {
    expect(lowestCommonAncestor(null, null, null)).toBe(null)
    expect(lowestCommonAncestor(new TreeNode(1), new TreeNode(1), null)).toBe(null)
    expect(lowestCommonAncestor(new TreeNode(1), null, new TreeNode(1))).toBe(null)
  })
})
