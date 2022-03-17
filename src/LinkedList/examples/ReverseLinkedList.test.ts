import { reverseList } from './ReverseLinkedList'
import { SingleLinkedList } from '../SingleLinkedList'

test('测试用例', () => {
  const data1 = [1, 2, 3, 4, 5]
  const data2 = [1, 2, 3]

  const result1 = [5, 4, 3, 2, 1]
  const result2 = [3, 2, 1]

  const gen = (data: number[]) => new SingleLinkedList(...data).head

  expect(reverseList(gen(data1))).toStrictEqual(gen(result1))
  expect(reverseList(gen(data2))).toStrictEqual(gen(result2))
  expect(reverseList(gen([]))).toStrictEqual(gen([]))
})
