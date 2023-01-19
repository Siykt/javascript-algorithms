import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { insertIntoABinarySearchTree } from './insertIntoABinarySearchTree'
import { levelOrder } from './LevelOrder'

describe('701. 二叉搜索树中的插入操作', () => {
  test('root = [4,2,7,1,3], val = 5', () => {
    const root = insertIntoABinarySearchTree(listToTreeByEffectiveNode([4, 2, 7, 1, 3]), 5)
    expect(levelOrder(root).flat(1)).toEqual([4, 2, 7, 1, 3, 5])
  })

  test('root = [40,20,60,10,30,50,70], val = 25', () => {
    const root = insertIntoABinarySearchTree(listToTreeByEffectiveNode([40, 20, 60, 10, 30, 50, 70]), 25)
    expect(levelOrder(root).flat(3)).toEqual([40, 20, 60, 10, 30, 50, 70, 25])
  })

  test('root = [4,2,7,1,3,null,null,null,null,null,null], val = 5', () => {
    const root = insertIntoABinarySearchTree(
      listToTreeByEffectiveNode([4, 2, 7, 1, 3, null, null, null, null, null, null]),
      5,
    )
    expect(levelOrder(root).flat(3)).toEqual([4, 2, 7, 1, 3, 5])
  })
})
