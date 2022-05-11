import { listToTree } from './listToTree'
import { levelOrder } from '../Tree/examples/LevelOrder'
import { postorderTraversal } from '../Tree/examples/PostorderTraversal'
import { preorderTraversal } from '../Tree/examples/PreorderTraversal'
import { inorderTraversal } from '../Tree/examples/InorderTraversal'

describe('将一个非空的数组转换为一个树', () => {
  test('测试输入: [1, 2, 3, 4, 5]', () => {
    const list = [1, 2, 3, 4, 5]
    const root = listToTree(list)

    expect(levelOrder(root)).toStrictEqual([[1], [2, 3], [4, 5]])
    expect(preorderTraversal(root)).toStrictEqual([1, 2, 4, 5, 3])
    expect(inorderTraversal(root)).toStrictEqual([4, 2, 5, 1, 3])
    expect(postorderTraversal(root)).toStrictEqual([4, 5, 2, 3, 1])
  })

  test('测试输入: [1, 2, 3, null, null, 4, 5]', () => {
    const list = [1, 2, 3, null, null, 4, 5]
    const root = listToTree(list)

    expect(levelOrder(root)).toStrictEqual([[1], [2, 3], [4, 5]])
    expect(preorderTraversal(root)).toStrictEqual([1, 2, 3, 4, 5])
    expect(inorderTraversal(root)).toStrictEqual([2, 1, 4, 3, 5])
    expect(postorderTraversal(root)).toStrictEqual([2, 4, 5, 3, 1])
  })

  test('测试输入: [1, null, 2, null, 3, null, 4, null, 5]', () => {
    const list = [1, null, 2, null, 3, null, 4, null, 5]

    expect(() => listToTree(list)).toThrowError('非法输入')
  })

  test('测试输入: [1, null, null, 2, 3, 4, 5]', () => {
    const list = [1, null, null, 2, 3, 4, 5]

    expect(() => listToTree(list)).toThrowError('非法输入')
  })

  test('测试输入: [1, null, 2, null, null, null, 3, null, null, null, null, null, null, null, 4]', () => {
    const list = [1, null, 2, null, null, null, 3, null, null, null, null, null, null, null, 4]

    expect(() => listToTree(list)).not.toThrowError('非法输入')

    const root = listToTree(list)

    expect(levelOrder(root)).toStrictEqual([[1], [2], [3], [4]])
    expect(preorderTraversal(root)).toStrictEqual([1, 2, 3, 4])
    expect(inorderTraversal(root)).toStrictEqual([1, 2, 3, 4])
    expect(postorderTraversal(root)).toStrictEqual([4, 3, 2, 1])
  })

  test('边界测试, 输入: null', () => {
    const list = null
    const root = listToTree(list)

    expect(root).toBeNull()
  })

  test('边界测试, 输入: []', () => {
    const list: number[] = []
    const root = listToTree(list)

    expect(root).toBeNull()
  })
})
