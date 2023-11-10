import { getChinesePrice } from './getChinesePrice'

describe('getChinesePrice', () => {
  test('测试整元', () => {
    expect(getChinesePrice(0)).toBe('零元整')
    expect(getChinesePrice(1)).toBe('壹元整')
    expect(getChinesePrice(10)).toBe('壹拾元整')
    expect(getChinesePrice(100)).toBe('壹佰元整')
    expect(getChinesePrice(1000)).toBe('壹仟元整')
    expect(getChinesePrice(10000)).toBe('壹万元整')
    expect(getChinesePrice(100000)).toBe('壹拾万元整')
    expect(getChinesePrice(1000000)).toBe('壹佰万元整')
    expect(getChinesePrice(10000000)).toBe('壹仟万元整')
    expect(getChinesePrice(100000000)).toBe('壹亿元整')
    expect(getChinesePrice(1000000000)).toBe('壹拾亿元整')
    expect(getChinesePrice(10000000000)).toBe('壹佰亿元整')
    expect(getChinesePrice(100000000000)).toBe('壹仟亿元整')
    expect(getChinesePrice(1000000000000)).toBe('整数位已超过最大值')
  })

  test('测试复杂整数', () => {
    expect(getChinesePrice(12)).toBe('壹拾贰元整')
    expect(getChinesePrice(123)).toBe('壹佰贰拾叁元整')
    expect(getChinesePrice(1234)).toBe('壹仟贰佰叁拾肆元整')
    expect(getChinesePrice(12345)).toBe('壹万贰仟叁佰肆拾伍元整')
    expect(getChinesePrice(123456)).toBe('壹拾贰万叁仟肆佰伍拾陆元整')
    expect(getChinesePrice(1234567)).toBe('壹佰贰拾叁万肆仟伍佰陆拾柒元整')
    expect(getChinesePrice(12345678)).toBe('壹仟贰佰叁拾肆万伍仟陆佰柒拾捌元整')
    expect(getChinesePrice(123456789)).toBe('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整')
  })

  test('测试小数', () => {
    expect(getChinesePrice(0.01)).toBe('壹分')
    expect(getChinesePrice(0.1)).toBe('壹角')
    expect(getChinesePrice(0.11)).toBe('壹角壹分')
    expect(getChinesePrice(0.99)).toBe('玖角玖分')
    expect(getChinesePrice(1.01)).toBe('壹元零壹分')
    expect(getChinesePrice(1.1)).toBe('壹元壹角')
    expect(getChinesePrice(1.11)).toBe('壹元壹角壹分')
    expect(getChinesePrice(9.99)).toBe('玖元玖角玖分')
    expect(getChinesePrice(1234.56)).toBe('壹仟贰佰叁拾肆元伍角陆分')
    expect(getChinesePrice(1234567.89)).toBe('壹佰贰拾叁万肆仟伍佰陆拾柒元捌角玖分')
  })
})
