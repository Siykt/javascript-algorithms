import { evaluateTheBracketPairsOfAString } from './evaluateTheBracketPairsOfAString'

describe('1807. 替换字符串中的括号内容', () => {
  test('s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]', () => {
    expect(
      evaluateTheBracketPairsOfAString('(name)is(age)yearsold', [
        ['name', 'bob'],
        ['age', 'two'],
      ]),
    ).toBe('bobistwoyearsold')
  })

  test('s = "hi(name)", knowledge = [["a","b"]]', () => {
    expect(evaluateTheBracketPairsOfAString('hi(name)', [['a', 'b']])).toBe('hi?')
  })

  test('s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]', () => {
    expect(evaluateTheBracketPairsOfAString('(a)(a)(a)aaa', [['a', 'yes']])).toBe('yesyesyesaaa')
  })
})
