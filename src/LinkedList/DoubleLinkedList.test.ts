import { DoubleLinkedList } from './DoubleLinkedList'

describe('双向链表的基本测试', () => {
  test('创建', () => {
    const list = new DoubleLinkedList<number>()

    expect(list.isEmpty()).toBe(true)
    expect(list.length).toBe(0)
  })

  test('插入', () => {
    const emptyList = new DoubleLinkedList()
    emptyList.add(1)
    expect(emptyList.head?.elem).toBe(1)

    // { 1 }
    const list = new DoubleLinkedList(1)
    // { 2 -> 1 }
    list.add(2)
    expect(list.head?.elem).toBe(2)
    expect(list.tail?.elem).toBe(1)
    expect(list.tail?.pre?.elem).toBe(2)
    expect(list.head?.next?.elem).toBe(1)

    // { 2 -> 1 -> 3 }
    list.append(3)
    expect(list.tail?.elem).toBe(3)
    expect(list.tail?.pre?.elem).toBe(1)
    expect(list.tail?.pre?.pre?.elem).toBe(2)

    // { 2 -> 1 -> 4 -> 3 }
    list.inset(4, 2)
    expect(list.head?.next?.next?.elem).toBe(4)

    // { -1 -> 2 -> 1 -> 4 -> 3 }
    list.inset(-1, -1)
    expect(list.head?.elem).toBe(-1)

    // { -1 -> 2 -> 1 -> 4 -> 3 -> 99 }
    list.inset(99, 99)
    expect(list.tail?.elem).toBe(99)

    // { 199 -> -1 -> 2 -> 1 -> 4 -> 3 -> 99 }
    list.insetRight(199, 199)
    expect(list.head?.elem).toBe(199)

    // { 199 -> -1 -> 2 -> 1 -> 4 -> 3 -> 99 -> 888 }
    list.insetRight(233, -1)
    expect(list.tail?.elem).toBe(233)
  })

  test('搜索', () => {
    const list = new DoubleLinkedList(0, 1, 2, 3, 4, 5)

    expect(list.search(-1).elem).toBe(0)
    expect(list.search(0).elem).toBe(0)
    expect(list.search(1).elem).toBe(1)
    expect(list.search(2).elem).toBe(2)
    expect(list.search(3).elem).toBe(3)
    expect(list.search(4).elem).toBe(4)
    expect(list.search(5).elem).toBe(5)
    expect(() => list.search(6)).toThrow('[DoubleLinkedList]')

    expect(list.searchRight(-1).elem).toBe(5)
    expect(list.searchRight(0).elem).toBe(5)
    expect(list.searchRight(1).elem).toBe(4)
    expect(list.searchRight(2).elem).toBe(3)
    expect(list.searchRight(3).elem).toBe(2)
    expect(list.searchRight(4).elem).toBe(1)
    expect(list.searchRight(5).elem).toBe(0)
    expect(() => list.searchRight(6)).toThrow('[DoubleLinkedList]')
  })

  test('删除', () => {
    const list = new DoubleLinkedList(0, 1, 2, 3, 4, 5)

    expect(() => list.remove(999)).toThrow('[DoubleLinkedList]')
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
    const list = new DoubleLinkedList(...data)
    const checkData = data.map((v) => v + 1)

    expect(list.map((v) => v + 1)).toEqual(checkData)
    expect(list.map((_, i) => checkData[i])).toEqual(checkData)
    expect(list.map((_, __, node) => node.elem + 1)).toEqual(checkData)

    const checkRightData = data.reverse().map((v) => v + 1 + ' ')
    expect(list.mapRight((v) => v + 1 + ' ')).toEqual(checkRightData)
    expect(list.mapRight((_, i) => checkRightData[i])).toEqual(checkRightData)
    expect(list.mapRight((_, __, node) => node.elem + 1 + ' ')).toEqual(checkRightData)
  })
})
