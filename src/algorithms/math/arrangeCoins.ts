/**
 * 441. 排列硬币
 * @param n 数
 * @returns
 */
export function arrangeCoinsByMath(n: number): number {
  // 思路: 数学
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
}

export function arrangeCoinsByBS(n: number): number {
  // 思路: 二分
  // 根据等差数列求和公式可知, 前 k 个完整阶梯行所需的硬币数量为 total = (k * (k + 1)) / 2
  // 因此, 我们只需要获取当前最大阶层填满所需要的硬币个数比对即可

  let left = 1
  let right = n

  const n2 = n * 2
  while (left < right) {
    // 取两个指针的中间值并加上 left 偏移
    const mid = left + Math.floor((right - left + 1) / 2)
    // 当中间值 * 2 <= 2n时, 推进左指针
    if (mid * (mid + 1) <= n2) {
      // 小了查右, 即排除更多的左侧数值
      left = mid
    } else {
      // 大了查左, 即排除更多的右侧数值
      right = mid - 1
    }
  }
  return left
}
