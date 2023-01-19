import { strongPasswordCheckerII } from './strongPasswordCheckerII'

describe('2299. 强密码检验器 II', () => {
  test('password = "IloveLe3tcode!"', () => {
    expect(strongPasswordCheckerII('IloveLe3tcode!')).toBe(true)
  })

  test('password = "Me+You--IsMyDream"', () => {
    expect(strongPasswordCheckerII('Me+You--IsMyDream')).toBe(false)
  })

  test('password = "1aB!"', () => {
    expect(strongPasswordCheckerII('1aB!')).toBe(false)
  })
})
