import { addTwoNumbers } from './AddTwoNumbers'
import { SingleLinkedList } from '../SingleLinkedList'

test('测试用例', () => {
  const data1 = [
    [2, 4, 3],
    [5, 6, 4],
  ]
  const data2 = [
    [9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9],
  ]
  const data3 = [[0], [0]]

  const result1 = [7, 0, 8]
  const result2 = [8, 9, 9, 9, 0, 0, 0, 1]
  const result3 = [0]

  const gen = (data: number[]) => new SingleLinkedList(...data).head

  expect(addTwoNumbers(gen(data1[0]), gen(data1[1]))).toStrictEqual(gen(result1))
  expect(addTwoNumbers(gen(data2[0]), gen(data2[1]))).toStrictEqual(gen(result2))
  expect(addTwoNumbers(gen(data3[0]), gen(data3[1]))).toStrictEqual(gen(result3))
})
