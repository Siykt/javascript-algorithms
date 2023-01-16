import { ImplementQueueUsingStacksQueue } from './implementQueueUsingStacks'

describe('232. 用栈实现队列', () => {
  test(`["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]`, () => {
    const queue = new ImplementQueueUsingStacksQueue()
    queue.push(1)
    queue.push(2)
    queue.peek()
    expect(queue.peek()).toBe(1)
    expect(queue.pop()).toBe(1)
    expect(queue.empty()).toBe(false)
  })
})
