import { countVowelStringsInRanges } from './countVowelStringsInRanges'

describe('2559. 统计范围内的元音字符串数', () => {
  test('words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]', () => {
    expect(
      countVowelStringsInRanges(
        ['aba', 'bcb', 'ece', 'aa', 'e'],
        [
          [0, 2],
          [1, 4],
          [1, 1],
        ],
      ),
    ).toEqual([2, 3, 0])
  })

  test('words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]', () => {
    expect(
      countVowelStringsInRanges(
        ['a', 'e', 'i'],
        [
          [0, 2],
          [0, 1],
          [2, 2],
        ],
      ),
    ).toEqual([3, 2, 1])
  })
})
