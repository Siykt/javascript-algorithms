import { guessNumberHigherOrLower } from './guessNumberHigherOrLower'

describe('374. 猜数字大小', () => {
  const genGuessAPI = (pick: number) => (n: number) => {
    if (n > pick) return -1
    if (n < pick) return 1
    return 0
  }

  test('n = 10, pick = 6', () => {
    expect(guessNumberHigherOrLower(10, genGuessAPI(6))).toBe(6)
  })

  test('n = 1, pick = 1', () => {
    expect(guessNumberHigherOrLower(1, genGuessAPI(1))).toBe(1)
  })

  test('n = 2, pick = 1', () => {
    expect(guessNumberHigherOrLower(2, genGuessAPI(1))).toBe(1)
  })

  test('Random', () => {
    const pick = Math.floor(Math.random() * 2000)
    const n = pick + Math.floor(Math.random() * 2000)
    expect(guessNumberHigherOrLower(n, genGuessAPI(pick))).toBe(pick)
  })
})
