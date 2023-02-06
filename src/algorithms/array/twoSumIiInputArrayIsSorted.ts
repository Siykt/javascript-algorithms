/**
 * 167. 两数之和 II - 输入有序数组
 * @param numbers 数字
 * @param target 目标值
 */
export function twoSumIiInputArrayIsSorted(numbers: number[], target: number): number[] {
  // 思路: 双指针, 有点像二分
  let l = 0
  let r = numbers.length - 1
  while (l <= r) {
    const n = numbers[l] + numbers[r]
    if (n === target) {
      return [l + 1, r + 1]
    } else if (n > target) {
      r--
    } else {
      l++
    }
  }
  return []
}
