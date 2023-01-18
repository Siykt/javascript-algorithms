import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { hasPathSum } from './hasPathSum'

describe('112. 路径总和', () => {
  test('root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', () => {
    const root = listToTreeByEffectiveNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
    expect(hasPathSum(root, 22)).toBe(true)
  })

  test('root = [1,2,3], targetSum = 5', () => {
    const root = listToTreeByEffectiveNode([1, 2, 3])
    expect(hasPathSum(root, 5)).toBe(false)
  })

  test('root = [], targetSum = 0', () => {
    expect(hasPathSum(listToTreeByEffectiveNode([]), 5)).toBe(false)
  })

  test('root = [1], targetSum = 1', () => {
    expect(hasPathSum(listToTreeByEffectiveNode([1]), 1)).toBe(true)
  })

  test('root = [], targetSum = 0', () => {
    expect(hasPathSum(listToTreeByEffectiveNode([]), 0)).toBe(false)
  })
})
