import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { mergeTwoBinaryTrees } from './mergeTwoBinaryTrees'

describe('617. 合并二叉树', () => {
  test('root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]', () => {
    const root1 = listToTreeByEffectiveNode([1, 3, 2, 5])
    const root2 = listToTreeByEffectiveNode([2, 1, 3, null, 4, null, 7])
    expect(mergeTwoBinaryTrees(root1, root2)).toEqual(listToTreeByEffectiveNode([3, 4, 5, 5, 4, null, 7]))
  })

  test('root1 = [1], root2 = [1,2]', () => {
    const root1 = listToTreeByEffectiveNode([1])
    const root2 = listToTreeByEffectiveNode([1, 2])
    expect(mergeTwoBinaryTrees(root1, root2)).toEqual(listToTreeByEffectiveNode([2, 2]))
  })

  test('边界测试', () => {
    expect(mergeTwoBinaryTrees(null, null)).toBe(null)
  })
})
