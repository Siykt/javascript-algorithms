import { minNumberOfHours } from './minNumberOfHours'

describe('2383. 赢得比赛需要的最少训练时长', () => {
  test('initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]', () => {
    expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).toBe(8)
  }, 300)

  test('initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]', () => {
    expect(minNumberOfHours(2, 4, [1], [3])).toBe(0)
  }, 300)

  test('initialEnergy = 1, initialExperience = 1, energy = [1,1,1,1], experience = [1,1,1,50]', () => {
    expect(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50])).toBe(51)
  }, 300)
})
