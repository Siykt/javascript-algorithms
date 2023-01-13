import { randomInt } from './random'

describe('随机Int', () => {
  test('0 ~ 1', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.9)
    expect(randomInt()).toBe(1)

    jest.spyOn(global.Math, 'random').mockReturnValue(0.1)
    expect(randomInt()).toBe(0)
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  test('10 ~ 20', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.99)
    expect(randomInt(10, 20)).toBe(20)

    jest.spyOn(global.Math, 'random').mockReturnValue(0.01)
    expect(randomInt(10, 20)).toBe(10)
    jest.spyOn(global.Math, 'random').mockRestore()
  })
})
