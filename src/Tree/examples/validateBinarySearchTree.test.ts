import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { validateBinarySearchTreeByRecursion } from './validateBinarySearchTree'

describe('98. 验证二叉搜索树 递归', () => {
  test('root = [2,1,3]', () => {
    const root = listToTreeByEffectiveNode([2, 1, 3])
    expect(validateBinarySearchTreeByRecursion(root)).toBe(true)
  })

  test('root = [5,1,4,null,null,3,6]', () => {
    const root = listToTreeByEffectiveNode([5, 1, 4, null, null, 3, 6])
    expect(validateBinarySearchTreeByRecursion(root)).toBe(false)
  })

  test('root = [0,-1]', () => {
    const root = listToTreeByEffectiveNode([0, -1])
    expect(validateBinarySearchTreeByRecursion(root)).toBe(true)
  })

  test('root = [5,4,6,null,null,3,7]', () => {
    const root = listToTreeByEffectiveNode([5, 4, 6, null, null, 3, 7])
    expect(validateBinarySearchTreeByRecursion(root)).toBe(false)
  })
})
