import { getBaseLog } from './getBaseLog'

describe('求以 x 为底 y 的对数', () => {
  test('求以 2 为底 4 的对数', () => {
    expect(getBaseLog(2, 4)).toBe(2)
  })

  test('求以 2 为底 8 的对数', () => {
    expect(getBaseLog(2, 8)).toBe(3)
  })

  test('求以 2 为底 16 的对数', () => {
    expect(getBaseLog(2, 16)).toBe(4)
  })
})
