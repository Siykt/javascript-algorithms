import { areNumbersAscending } from './areNumbersAscending'

describe('检查句子中的数字是否递增', () => {
  test('1 box has 3 blue 4 red 6 green and 12 yellow marbles', () => {
    expect(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')).toBe(true)
  })
})
