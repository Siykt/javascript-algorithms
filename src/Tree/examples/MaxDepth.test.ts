import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { maxDepthUseDecomposition, maxDepthUseTraverse } from './MaxDepth'

describe('求树的最大深度', () => {
  describe('输入 [3, 9, 20, null, null, 15, 7]', () => {
    const data = listToTreeByEffectiveNode([3, 9, 20, null, null, 15, 7])
    const result = 3

    test('使用内部递归的方式', () => expect(maxDepthUseTraverse(data)).toBe(result))
    test('使用分解问题成计算左右子树高度的方式', () => expect(maxDepthUseDecomposition(data)).toBe(result))
  })

  describe('输入 [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7]', () => {
    const data = listToTreeByEffectiveNode([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7])
    const result = 7

    test('使用内部递归的方式', () => expect(maxDepthUseTraverse(data)).toBe(result))
    test('使用分解问题成计算左右子树高度的方式', () => expect(maxDepthUseDecomposition(data)).toBe(result))
  })

  describe('输入 []', () => {
    const data = listToTreeByEffectiveNode([])
    const result = 0

    test('使用内部递归的方式', () => expect(maxDepthUseTraverse(data)).toBe(result))
    test('使用分解问题成计算左右子树高度的方式', () => expect(maxDepthUseDecomposition(data)).toBe(result))
  })
})
