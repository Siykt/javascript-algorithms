import LRUCache from './LRU'

describe('测试LRU', () => {
  test('边界测试', () => {
    expect(() => new LRUCache(0)).toThrowError()
    expect(() => new LRUCache(-1)).toThrowError()
  })

  test('测试LRU插入', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(-1)
    cache.put(4, 4)
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(4)
  })
})
