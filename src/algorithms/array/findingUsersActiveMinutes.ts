/**
 * 1817. 查找用户活跃分钟数
 * @param logs 日志
 * @param k 时间序列
 */
export function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  // 思路: hash
  // 阅读理解题
  // 核心题意为: 根据分钟数k, 统计logs中所有用户在某分钟里的操作次数
  // 例1即为: 1 ~ 5 分钟里, logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], ans = [0,2,0,0,0]
  // 用户活跃1分钟的有0次
  // 用户活跃2分钟的有2次,
  // 依据是 id = 0 的用户在 2分与 5分进行了操作, id = 1 在 2分钟与3分钟有操作
  // ...

  // 由于需要去重用户在同一分钟的操作, 所以我们可以加上 Set 实现Hash
  const hash = new Map<number, Set<number>>()
  for (const [id, time] of logs) {
    let s = hash.get(id)
    if (!s) {
      s = new Set()
      hash.set(id, s)
    }
    s.add(time)
  }
  // 然后遍历返回set的size即可完成活跃统计
  const ans = Array(k).fill(0)
  for (const s of hash.values()) {
    // 需要从 0 开始, 即1分钟活跃数量为 0
    ans[s.size - 1]++
  }
  return ans
}
