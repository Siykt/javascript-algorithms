/**
 * 2363. 合并相似的物品
 * @param items1 物品集合1
 * @param items2 物品集合2
 */
export function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  // hash
  const hash: Record<number, number> = {}
  for (const [v, t] of [...items1, ...items2]) {
    hash[v] = (hash[v] || 0) + t
  }
  const ret: number[][] = []
  for (const v in hash) {
    // 利用Object key自动排序的特点实现返回结果排序
    ret.push([+v, hash[v]])
  }
  return ret
}

/**
 * 双指针版本
 */
export function mergeSimilarItemsByDoublePoint(items1: number[][], items2: number[][]): number[][] {
  // 排序 + 双指针
  items1.sort(([a], [b]) => a - b)
  items2.sort(([a], [b]) => a - b)

  let p1 = 0
  let p2 = 0
  const ret: number[][] = []
  while (p1 < items1.length && p2 < items2.length) {
    const [v1, w1] = items1[p1]
    const [v2, w2] = items2[p2]
    // 检查排序项的 value 大小决定ret的入栈
    if (v1 === v2) {
      // 相等即为叠加
      ret.push([v1, w1 + w2])
      p1++
      p2++
    } else if (v1 > v2) {
      // 后续放入更小项目即可
      ret.push([v2, w2])
      p2++
    } else {
      ret.push([v1, w1])
      p1++
    }
  }
  // 最后合并结果
  return ret.concat(items1.slice(p1), items2.slice(p2))
}
