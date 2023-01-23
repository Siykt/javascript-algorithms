import { calculateAmountPaidInTaxes } from './calculateAmountPaidInTaxes'

describe('2303. 计算应缴税款总额', () => {
  test('brackets = [[3,50],[7,10],[12,25]], income = 10', () => {
    expect(
      calculateAmountPaidInTaxes(
        [
          [3, 50],
          [7, 10],
          [12, 25],
        ],
        10,
      ),
    ).toBe(2.65)
  }, 300)

  test('brackets = [[1,0],[4,25],[5,50]], income = 2', () => {
    expect(
      calculateAmountPaidInTaxes(
        [
          [1, 0],
          [4, 25],
          [5, 50],
        ],
        2,
      ),
    ).toBe(0.25)
  }, 300)

  test('brackets = [[2,50]], income = 0', () => {
    expect(calculateAmountPaidInTaxes([[2, 50]], 0)).toBe(0)
  }, 300)
})
