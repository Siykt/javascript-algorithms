import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { evaluateTree } from './evaluateTree'

describe('2331. 计算布尔二叉树的值', () => {
  test('root = [2,1,3,null,null,0,1]', () => {
    const root = listToTreeByEffectiveNode([2, 1, 3, null, null, 0, 1])
    expect(evaluateTree(root)).toBe(true)
  }, 300)

  test('root = [0]', () => {
    const root = listToTreeByEffectiveNode([0])
    expect(evaluateTree(root)).toBe(false)
  }, 300)

  test('root = null', () => {
    const root = listToTreeByEffectiveNode(null)
    expect(evaluateTree(root)).toBe(false)
  }, 300)
})
