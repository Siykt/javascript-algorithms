/**
 * 70. 爬楼梯
 * @param n n 阶楼梯
 */
export function climbStairs(n: number): number {
  // DP
  // BaseCase: 1 = 1, 2 = 2
  // 定义子问题: 爬上n - 1个楼梯有多少种方法, 爬上n - 2个楼梯有多少种方法
  // 状态即为: f(n) = f(n - 1) + f(n - 2)

  // DPTable
  const dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    // 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
