/**
 * 1385. 两个数组间的距离值
 * @param arr1 数组1
 * @param arr2 数组2
 * @param d 距离
 */
export function findTheDistanceValueBetweenTwoArraysByAC(arr1: number[], arr2: number[], d: number): number {
  // 思路: AC模拟
  let ans = 0
  for (const a1 of arr1) {
    // 模拟计算
    if (arr2.every((a2) => Math.abs(a1 - a2) > d)) ans++
  }
  return ans
}

export function findTheDistanceValueBetweenTwoArraysByBS(arr1: number[], arr2: number[], d: number): number {
  // 思路: 二分
  // |arr1[i]-arr2[j]| > d 即可得 arr1[i] − d ≤ arr2[i] ≤ arr1[i] + d
  // 1. 先将arr2排序
  // 2. 查询符合题意的值

  const arr2Len = arr2.length
  // 排序
  arr2.sort((a, b) => a - b)

  let ans = 0
  for (const a1 of arr1) {
    // 计算区间
    const low = a1 - d
    const high = a1 + d

    ans++
    // 二分模板
    let left = 0
    let right = arr2Len - 1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      const n = arr2[mid]
      // 带入条件
      if (n >= low && n <= high) {
        ans--
        break
      } else if (n > high) {
        // 大了查左, 即排除更多的右侧数值
        right = mid - 1
      } else {
        // 小了查右, 即排除更多的左侧数值
        left = mid + 1
      }
    }
  }
  return ans
}
