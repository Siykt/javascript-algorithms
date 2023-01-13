import { removeLinkedListElements } from './removeLinkedListElements'
import { SingleLinkedList } from '../SingleLinkedList'

describe('203. 移除链表元素', () => {
  const gen = (data: number[]) => new SingleLinkedList(...data).head

  test('head = [1,2,6,3,4,5,6], val = 6', () => {
    expect(removeLinkedListElements(gen([1, 2, 6, 3, 4, 5, 6]), 6)).toStrictEqual(gen([1, 2, 3, 4, 5]))
  })

  test('head = [], val = 1', () => {
    expect(removeLinkedListElements(gen([]), 1)).toStrictEqual(gen([]))
  })

  test('head = [7,7,7,7], val = 7', () => {
    expect(removeLinkedListElements(gen([7, 7, 7, 7]), 7)).toStrictEqual(gen([]))
  })
})
