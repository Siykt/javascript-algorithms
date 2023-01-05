import { zigzagConversion } from './zigzagConversion'

describe('Z 字形变换', () => {
  test('PAYPALISHIRING', () => {
    expect(zigzagConversion('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    expect(zigzagConversion('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    expect(zigzagConversion('PAYPALISHIRING', 1)).toBe('PAYPALISHIRING')
  })
})
