/**
 * 852. 山脉数组的峰顶索引
 * @param arr 数组
 */
export function peakIndexInMountainArray(arr: number[]): number {
  // 思路: 二分查找
  // 1. 可以把山脉数组表示成形象的: 山底 山腰 顶峰 山腰 山底
  // 2. 我们要找的就是顶峰的位置, 即为“找到数组中最大的值”
  // 3. 二分查找可以帮我们快速的找到最大值
  // 3.1 如果当前值与下一个值比较大了的情况继续往左侧查询, 即排除更多的右侧数值, 并更新最大值
  // 3.2 如果小了继续往右侧查询, 即排除更多的左侧数值

  const len = arr.length
  // 最大值下标
  let res = 0
  // 左指针, 排除首位
  let l = 1
  // 右指针, 排除末尾
  let r = len - 2
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    // 因为要找到的是最大值, 需要当前值与下一个值比较
    if (arr[mid] > arr[mid + 1]) {
      // 如果大了继续往左侧查询, 即排除更多的右侧数值
      r = mid - 1
      // 更新最大值
      res = mid
    } else {
      // 小了查左, 即排除更多的右侧数值
      l = mid + 1
    }
  }
  return res
}
