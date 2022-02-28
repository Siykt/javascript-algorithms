import { SingleLinkedList } from './SingleLinkedList'

describe('单向链表的基本测试', () => {
  test('创建', () => {
    const list = new SingleLinkedList<number>()

    expect(list.isEmpty()).toBe(true)
    expect(list.length).toBe(0)
  })

  test('插入', () => {
    const emptyList = new SingleLinkedList()
    emptyList.add(1)
    expect(emptyList.head?.elem).toBe(1)

    // { 1 }
    const list = new SingleLinkedList(1)
    // { 2 -> 1 }
    list.add(2)
    expect(list.head?.elem).toBe(2)
    expect(list.head?.next?.elem).toBe(1)

    // { 2 -> 1 -> 3 }
    list.append(3)
    expect(list.tail?.elem).toBe(3)
    expect(list.head?.next?.next?.elem).toBe(3)

    // { 2 -> 1 -> 4 -> 3 }
    list.inset(4, 2)
    expect(list.head?.next?.next?.elem).toBe(4)

    // { -1 -> 2 -> 1 -> 4 -> 3 }
    list.inset(-1, -1)
    expect(list.head?.elem).toBe(-1)

    // { -1 -> 2 -> 1 -> 4 -> 3 -> 99 }
    list.inset(99, 99)
    expect(list.tail?.elem).toBe(99)
  })

  test('搜索', () => {
    const list = new SingleLinkedList(0, 1, 2, 3, 4, 5)

    expect(list.search(-1).elem).toBe(0)
    expect(list.search(0).elem).toBe(0)
    expect(list.search(1).elem).toBe(1)
    expect(list.search(2).elem).toBe(2)
    expect(list.search(3).elem).toBe(3)
    expect(list.search(4).elem).toBe(4)
    expect(list.search(5).elem).toBe(5)
    expect(() => list.search(6)).toThrow('[SingleLinkedList]')
  })

  test('删除', () => {
    const list = new SingleLinkedList(0, 1, 2, 3, 4, 5)

    expect(() => list.remove(999)).toThrow('[SingleLinkedList]')
    expect(list.remove(1)).toBe(true)
    expect(list.remove(list.length)).toBe(false)

    // { 0 -> 2 -> 3 -> 4 -> 5 }
    expect(list.search(1).elem).toBe(2)
    expect(list.search(2).elem).toBe(3)

    // { 0 -> 2 -> 3 -> 4 }
    list.remove(list.length - 1)
    expect(list.search(3)).toEqual(list.tail)
  })

  test('遍历', () => {
    const data = [0, 1, 2, 3, 4, 5]
    const list = new SingleLinkedList(...data)
    const checkData = data.map((v) => v + 1)

    expect(list.map((v) => v + 1)).toEqual(checkData)
    expect(list.map((_, i) => i + 1)).toEqual(checkData)
    expect(list.map((_, __, node) => node.elem + 1)).toEqual(checkData)
  })
})
