import LRU from './LRU'

describe('测试LRU', () => {
  test('边界测试', () => {
    expect(() => new LRU<number>(0)).toThrowError()
    expect(() => new LRU<number>(-1)).toThrowError()
  })

  test('测试LRU插入', () => {
    const cache = new LRU<number>(2)

    cache.put('first', 1)
    expect(cache.get('first')).toBe(1)
    expect(cache.get('second')).toBe(null)

    cache.put('second', 2)
    expect(cache.get('first')).toBe(1)
    expect(cache.get('second')).toBe(2)
    expect(cache.get('third')).toBe(null)

    cache.put('third', 3)
    expect(cache.get('first')).toBe(null)
    expect(cache.get('second')).toBe(2)
    expect(cache.get('third')).toBe(3)

    cache.put('fourth', 4)
    expect(cache.get('first')).toBe(null)
    expect(cache.get('second')).toBe(null)
    expect(cache.get('third')).toBe(3)
    expect(cache.get('fourth')).toBe(4)
  })
})
