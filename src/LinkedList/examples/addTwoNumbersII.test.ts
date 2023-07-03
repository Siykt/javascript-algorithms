import { addTwoNumbersII } from './addTwoNumbersII'
import { SingleLinkedList } from '../SingleLinkedList'

describe('445. 两数相加 II', () => {
  test('l1 = [7,2,4,3], l2 = [5,6,4]', () => {
    const l1 = [7, 2, 4, 3]
    const l2 = [5, 6, 4]
    const result = [7, 8, 0, 7]

    const gen = (data: number[]) => new SingleLinkedList(...data).head
    expect(addTwoNumbersII(gen(l1), gen(l2))).toStrictEqual(gen(result))
  }, 300)

  test('l1 = [2,4,3], l2 = [5,6,4]', () => {
    const l1 = [2, 4, 3]
    const l2 = [5, 6, 4]
    const result = [8, 0, 7]

    const gen = (data: number[]) => new SingleLinkedList(...data).head
    expect(addTwoNumbersII(gen(l1), gen(l2))).toStrictEqual(gen(result))
  }, 300)

  test('l1 = [0], l2 = [0]', () => {
    const l1 = [0]
    const l2 = [0]
    const result = [0]

    const gen = (data: number[]) => new SingleLinkedList(...data).head
    expect(addTwoNumbersII(gen(l1), gen(l2))).toStrictEqual(gen(result))
  }, 300)
})
