import { SingleLinkedList } from '../SingleLinkedList'
import { middleOfTheLinkedList } from './middleOfTheLinkedList'

describe('876. 链表的中间结点', () => {
  const gen = (data: number[]) => new SingleLinkedList(...data).head

  test('nums = [1,2,3,4,5]', () => {
    expect(middleOfTheLinkedList(gen([1, 2, 3, 4, 5]))).toStrictEqual(gen([3, 4, 5]))
  })

  test('[1,2,3,4,5,6]', () => {
    expect(middleOfTheLinkedList(gen([1, 2, 3, 4, 5, 6]))).toStrictEqual(gen([4, 5, 6]))
  })
})
