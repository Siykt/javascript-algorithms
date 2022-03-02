import { deleteDuplicates, deleteDuplicates2, deleteDuplicates3 } from './DeleteDuplicates'
import { SingleLinkedList } from '../SingleLinkedList'

test('测试用例', () => {
  const data1 = [0, 0, 0]
  const data2 = [-1, 0, 0, 0, 3, 3]
  const data3 = [0, 0, 1, 1]

  const result1 = [0]
  const result2 = [-1, 0, 3]
  const result3 = [0, 1]

  const gen = (data: number[]) => new SingleLinkedList(...data).head

  expect(deleteDuplicates(gen(data1))).toStrictEqual(gen(result1))
  expect(deleteDuplicates2(gen(data1))).toStrictEqual(gen(result1))
  expect(deleteDuplicates3(gen(data1))).toStrictEqual(gen(result1))

  expect(deleteDuplicates(gen(data2))).toStrictEqual(gen(result2))
  expect(deleteDuplicates2(gen(data2))).toStrictEqual(gen(result2))
  expect(deleteDuplicates3(gen(data2))).toStrictEqual(gen(result2))

  expect(deleteDuplicates(gen(data3))).toStrictEqual(gen(result3))
  expect(deleteDuplicates2(gen(data3))).toStrictEqual(gen(result3))
  expect(deleteDuplicates3(gen(data3))).toStrictEqual(gen(result3))
})
