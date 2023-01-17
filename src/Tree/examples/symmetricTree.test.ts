import { listToTreeByEffectiveNode } from '../../h/listToTree'
import { symmetricTree } from './symmetricTree'

describe('101. 对称二叉树', () => {
  test('root = [1,2,2,3,4,4,3]', () => {
    expect(symmetricTree(listToTreeByEffectiveNode([1, 2, 2, 3, 4, 4, 3]))).toBe(true)
  })

  test('root = [1,2,2,null,3,null,3]', () => {
    expect(symmetricTree(listToTreeByEffectiveNode([1, 2, 2, null, 3, null, 3]))).toBe(false)
  })
})
