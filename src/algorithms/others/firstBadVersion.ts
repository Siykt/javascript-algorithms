/**
 * 278. 第一个错误的版本
 * @param isBadVersion isBadVersionAPI
 */
export function firstBadVersion(isBadVersion: (version: number) => boolean) {
  // 思路: 二分查找
  // 1. isBadVersion为已定义方法
  // 1.1 由于isBadVersion只能检查是否为错误版本, 无法获取是否为第一个错误的版本
  // 1.2 所以需要添加错误版本的边界情况
  // 2. 查询中位数
  // 2.1 如果错了继续往左侧查询, 即排除更多的右侧数值
  // 2.2 如果对了继续往右侧查询, 即排除更多的左侧数值
  // 2.3 判断错误版本的边界情况, 当其为错误版本时, 并且下一个要检查的版本不是错误版本即为答案

  return (n: number): number => {
    // 左边界
    let left = 1
    // 右边界
    let right = n
    while (left <= right) {
      // 中间值, 需要加上左侧偏移
      const mid = left + Math.floor((right - left) / 2)
      if (isBadVersion(mid)) {
        // 错了查左, 即排除更多的右侧数值
        right = mid - 1
        // 判断错误版本的边界情况, 当其为错误版本时, 并且下一个要检查的版本不是错误版本即为答案
        if (!isBadVersion(right)) {
          return mid
        }
      } else {
        // 小了查右, 即排除更多的左侧数值
        left = mid + 1
      }
    }
    return left
  }
}
