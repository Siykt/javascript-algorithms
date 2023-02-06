/**
 * 77. 组合
 * @param n 范围
 * @param k 组合
 */
export function combine(n: number, k: number): number[][] {
  // 回溯
  const ans: number[][] = []
  // 路径
  const path: number[] = []
  const dfs = (i: number) => {
    // 还需要选多少个数
    const d = k - path.length
    // 得到答案退出递归
    if (!d) {
      ans.push(path.slice())
      return
    }
    // 添加剩余组合
    for (let j = i; j >= d; --j) {
      path.push(j)
      // 继续递归
      dfs(j - 1)
      path.pop()
    }
  }
  dfs(n)
  return ans
}
