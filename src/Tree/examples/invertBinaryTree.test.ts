import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { invertBinaryTree } from './invertBinaryTree'
import { levelOrder } from './LevelOrder'

describe('226. 翻转二叉树', () => {
  test('root = [4,2,7,1,3,6,9]', () => {
    const root = listToTreeByEffectiveNode([4, 2, 7, 1, 3, 6, 9])
    invertBinaryTree(root)
    expect(levelOrder(root).flat(1)).toEqual([4, 7, 2, 9, 6, 3, 1])
  })

  test('root = [2,1,3]', () => {
    const root = listToTreeByEffectiveNode([2, 1, 3])
    invertBinaryTree(root)
    expect(levelOrder(root).flat(1)).toEqual([2, 3, 1])
  })

  test('root = []', () => {
    expect(invertBinaryTree(listToTreeByEffectiveNode([]))).toBe(null)
  })
})
