/**
 * 232. 用栈实现队列
 */
export class ImplementQueueUsingStacksQueue {
  // 入栈队列
  private inputStack: number[] = []
  // 出栈队列
  private outputStack: number[] = []

  push(x: number): void {
    this.inputStack.push(x)
  }

  pop(): number {
    this.reverseStack()
    return this.outputStack.pop() as number
  }

  peek(): number {
    this.reverseStack()
    return this.outputStack[this.outputStack.length - 1]
  }

  empty(): boolean {
    return this.inputStack.length + this.outputStack.length === 0
  }

  // 反转输入输出队列
  private reverseStack() {
    if (!this.outputStack.length) {
      while (this.inputStack.length > 0) {
        // 反转队列
        this.outputStack.push(this.inputStack.pop() as number)
      }
    }
  }
}
