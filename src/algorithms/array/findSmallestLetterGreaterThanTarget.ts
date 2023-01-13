export function findSmallestLetterGreaterThanTarget(letters: string[], target: string): string {
  // 思路: 二分
  let left = 0
  let right = letters.length - 1
  while (left <= right) {
    // 取两个指针的中间值并加上 left 偏移
    const mid = left + Math.floor((right - left) / 2)
    const n = letters[mid]
    if (n > target) {
      // 大了查左, 即排除更多的右侧数值
      right = mid - 1
      // 如果下一个小于等于比较值则返回答案
      if (letters[right] <= target) {
        return letters[mid]
      }
    } else {
      // 小了查右, 即排除更多的左侧数值
      left = mid + 1
    }
  }
  return letters[0]
}
