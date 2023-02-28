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
