/**
 * 374. 猜数字大小
 * @param n 输入的数
 * @param guess guess API
 */
export function guessNumberHigherOrLower(n: number, guess: (n: number) => number): number {
  // 思路:
  // 1. guess 是已定义的方法, 它会比较数字的大小, 返回结果参考题目
  // 2. 二分查找题核心在于如何定义左右边界, 再获取中间值进行比较
  // 2.1 本题的左边界范围为 1 ~ n < pick
  // 2.2 右边界范围即为 n > pick ~ n
  // 3. 从两个指针中间开始查, 并与 pick 进行比较
  // 3.1 如果大了继续往左侧查询, 即排除更多的右侧数值
  // 3.2 如果小了继续往右侧查询, 即排除更多的左侧数值

  // 左边界
  let left = 1
  // 右边界
  let right = n
  while (left <= right) {
    // 中间值, 需要加上左侧偏移
    const mid = left + Math.floor((right - left) / 2)
    const res = guess(mid)
    if (res === 0) {
      return mid
    } else if (res < 0) {
      // 大了查左, 即排除更多的右侧数值
      right = mid - 1
    } else {
      // 小了查右, 即排除更多的左侧数值
      left = mid + 1
    }
  }
  return -1
}
