/**
 * 冒泡排序
 * @param arr 需要排序的数组
 */
export function bubbleSort(arr: number[]): number[] {
  // 因为冒泡排序的实现是: 比较相邻的元素, 如果第一个比第二个大, 就交换他们两个
  // 那么最后一位肯定是最大的, 下一次遍历时我们就可以跳过最后一个
  // 记录最后需要排序的位置, 每次遍历后往前推一位
  for (let prevSortIndex = arr.length - 1; prevSortIndex > 0; prevSortIndex--) {
    // 再从头开始到已记录的位置进行比大小的排序
    for (let i = 0; i < prevSortIndex; i++) {
      const cur = arr[i]
      const next = arr[i + 1]
      // 如果第一个比第二个大, 就交换他们两个
      if (cur > next) {
        arr[i] = next
        arr[i + 1] = cur
      }
    }
  }
  return arr
}

/**
 * 冒泡排序 (内部递归版)
 * @param arr 需要排序的数组
 */
export function bubbleSortByRecursion(arr: number[]): number[] {
  const traversal = (arr: number[], prevSortIndex: number): number[] => {
    // 递归版本自行处理退出条件与边界问题
    if (prevSortIndex <= 0) return arr
    for (let i = 0; i < prevSortIndex; i++) {
      const cur = arr[i]
      const next = arr[i + 1]
      // 如果第一个比第二个大, 就交换他们两个
      if (cur > next) {
        arr[i] = next
        arr[i + 1] = cur
      }
    }
    // 每次递归后往前推一位
    return traversal(arr, prevSortIndex - 1)
  }
  return traversal(arr, arr.length - 1)
}
