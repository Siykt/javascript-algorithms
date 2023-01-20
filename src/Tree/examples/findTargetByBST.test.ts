import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { findTargetByBST } from './findTargetByBST'

describe('653. 两数之和 IV - 输入二叉搜索树', () => {
  test('root = [5,3,6,2,4,null,7], k = 9', () => {
    const root = listToTreeByEffectiveNode([5, 3, 6, 2, 4, null, 7])
    expect(findTargetByBST(root, 9)).toBe(true)
  })

  test('root = [5,3,6,2,4,null,7], k = 28', () => {
    const root = listToTreeByEffectiveNode([5, 3, 6, 2, 4, null, 7])
    expect(findTargetByBST(root, 28)).toBe(false)
  })

  test('root = [], k = 0', () => {
    const root = listToTreeByEffectiveNode([])
    expect(findTargetByBST(root, 0)).toBe(false)
  })
})
