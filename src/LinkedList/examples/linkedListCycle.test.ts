import { randomInt } from '../../h/random'
import { SingleLinkedList } from '../SingleLinkedList'
import { linkedListCycle } from './linkedListCycle'

describe('141. 环形链表', () => {
  const gen = (data: number[], pos: number) => {
    const { head } = new SingleLinkedList(...data)
    if (!head) return head
    if (pos < 0) return head
    let last = head
    let posNode = head
    while (last.next) {
      if (pos) {
        posNode = last.next
        pos--
      }
      last = last.next
    }
    last.next = posNode
    return head
  }

  test('head = [3,2,0,-4], pos = 1', () => {
    expect(linkedListCycle(gen([3, 2, 0, -4], 1))).toBe(true)
  })

  test('head = [1,2], pos = 0', () => {
    expect(linkedListCycle(gen([1, 2], 0))).toBe(true)
  })

  test('head = [1], pos = -1', () => {
    expect(linkedListCycle(gen([1], -1))).toBe(false)
  })

  test('Random', () => {
    const arr = new Array(randomInt(1, 1000)).fill(0).map((_, i) => i)
    const pos = Math.floor(randomInt(-1, 1000))
    expect(linkedListCycle(gen(arr, -1))).toBe(false)
    expect(linkedListCycle(gen(arr, pos))).toBe(pos >= 0)
  })
})
