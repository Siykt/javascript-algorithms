/**
 * 选择排序
 * @param arr 需要排序的数组
 */
export function selectionSort(arr: number[]): number[] {
  // 默认第一个元素为有序, 或者为参考点
  // 每次迭代时, 从 j 到 arr.length 所代表的就是还未排序的部分
  const len = arr.length
  for (let j = 0; j < len; j++) {
    // 从 j 到 arr.length 所代表的就是还未排序的部分
    // 从还未排序的部分中找到最小的元素
    let min = j
    // 每次都会重复 j + 1 ~ arr.length, 所以选择排序稳定是O(n^2)的时间复杂度
    for (let i = j + 1; i < len; i++) {
      if (arr[i] < arr[min]) {
        min = i
      }
    }
    // 将最小的元素与 j 交换
    const temp = arr[j]
    arr[j] = arr[min]
    arr[min] = temp
  }
  return arr
}
