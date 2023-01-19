import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { levelOrder } from './LevelOrder'
import { searchInABinarySearchTree } from './searchInABinarySearchTree'

describe('700. 二叉搜索树中的搜索', () => {
  test('root = [4,2,7,1,3], val = 2', () => {
    const newRoot = searchInABinarySearchTree(listToTreeByEffectiveNode([4, 2, 7, 1, 3]), 2)
    expect(levelOrder(newRoot).flat(1)).toEqual([2, 1, 3])
  })

  test('root = [4,2,7,1,3], val = 5', () => {
    const newRoot = searchInABinarySearchTree(listToTreeByEffectiveNode([4, 2, 7, 1, 3]), 5)
    expect(levelOrder(newRoot)).toEqual([])
  })
})
