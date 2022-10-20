/**
 * 插入排序
 * @param arr 需要排序的数组
 */
export function insertionSort(arr: number[]): number[] {
  // 默认第一个元素为有序, 或者为参考点
  // 每次迭代时, 从 j 到 arr.length 所代表的就是还未排序的部分
  for (let j = 1; j < arr.length; j++) {
    // 取出当前元素 key
    const key = arr[j]
    // 从 0 ~ i 的部分即为已经排序的部分, 也称为(循环不变式)
    let i = j - 1
    // 从已经排序的部分中找到比 key 小的元素
    while (i >= 0 && arr[i] > key) {
      // 如果找到比 key 更大的数了, 则将当前已经排序的元素与下一个元素的位置进行交换, 也就是滞后一位
      arr[i + 1] = arr[i]
      // 并且使 i 向前移动一位
      i--
    }
    // 如果没有找到比 key 更小的数了, 则将 key 放到最后一个比它小的元素之前的位置
    arr[i + 1] = key
  }
  return arr
}
