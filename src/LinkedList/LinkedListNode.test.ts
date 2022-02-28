import { LinkedListNode } from './LinkedListNode'

test('链表节点的基本测试', () => {
  expect(new LinkedListNode('init').elem).toBe('init')

  expect(new LinkedListNode('init', new LinkedListNode('next')).next?.elem).toBe('next')

  const node = new LinkedListNode('one')

  node.elem = 'two'
  expect(node.elem).not.toBe('one')
  expect(node.elem).toBe('two')
})
