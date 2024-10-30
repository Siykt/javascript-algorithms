import LRUCache from './LRU'

describe('测试LRU', () => {
  test('边界测试', () => {
    expect(() => new LRUCache(0)).toThrowError()
    expect(() => new LRUCache(-1)).toThrowError()
  })

  test('测试LRU插入', () => {
    const cache = new LRUCache<number, number>(2)

    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(null)
    cache.put(4, 4)
    expect(cache.get(1)).toBe(null)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(4)
  })

  test('测试LRU插入复杂数据', () => {
    const cache = new LRUCache<string, { a: { b: { c: number } } }>(200)

    cache.put('0x30999A33266d815559d164B0c4f1C33ac361be6D', { a: { b: { c: 1 } } })
    cache.put('0x40b943a288d31C8bBc8B9Aa36398Cc16f057947e', { a: { b: { c: 2 } } })
    expect(cache.get('0x30999A33266d815559d164B0c4f1C33ac361be6D')).toEqual({ a: { b: { c: 1 } } })
    expect(cache.get('0x40b943a288d31C8bBc8B9Aa36398Cc16f057947e')).toEqual({ a: { b: { c: 2 } } })
  })

  test('测试LRU异步插入', async () => {
    const cache = new LRUCache<number, number>(2)

    cache.put(1, 1)
    setTimeout(() => {
      cache.put(2, 2)
    }, 100)
    setTimeout(() => {
      expect(cache.get(1)).toBe(1)
    }, 200)
    setTimeout(() => {
      expect(cache.get(2)).toBe(2)
    }, 300)
  })
})
