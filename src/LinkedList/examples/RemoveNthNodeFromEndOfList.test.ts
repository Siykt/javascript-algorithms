import { removeNthNodeFromEndOfList } from './RemoveNthNodeFromEndOfList'
import { SingleLinkedList } from '../SingleLinkedList'

test('测试用例', () => {
  const data1: [number[], number] = [[1], 1]
  const data2: [number[], number] = [[1, 2, 3, 4, 5], 2]
  const data3: [number[], number] = [[1, 2], 1]

  const result1: number[] = []
  const result2 = [1, 2, 3, 5]
  const result3 = [1]

  const gen = (data: number[]) => new SingleLinkedList(...data).head

  expect(removeNthNodeFromEndOfList(gen(data1[0]), data1[1])).toStrictEqual(gen(result1))
  expect(removeNthNodeFromEndOfList(gen(data2[0]), data2[1])).toStrictEqual(gen(result2))
  expect(removeNthNodeFromEndOfList(gen(data3[0]), data3[1])).toStrictEqual(gen(result3))
})
