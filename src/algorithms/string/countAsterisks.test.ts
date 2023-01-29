import { countAsterisks } from './countAsterisks'

describe('2315. 统计星号', () => {
  test('s = "l|*e*et|c**o|*de|"', () => {
    expect(countAsterisks('l|*e*et|c**o|*de|')).toBe(2)
  }, 300)

  test('s = "iamprogrammer"', () => {
    expect(countAsterisks('iamprogrammer')).toBe(0)
  }, 300)

  test('s = "yo|uar|e**|b|e***au|tifu|l"', () => {
    expect(countAsterisks('yo|uar|e**|b|e***au|tifu|l')).toBe(5)
  }, 300)
})
