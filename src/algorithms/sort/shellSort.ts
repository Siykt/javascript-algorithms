/**
 * 希尔排序
 * @param arr 需要排序的数组
 */
export function shellSort(arr: number[]) {
  // 希尔排序是插入排序的一种更高效的改进版本
  // 它的工作原理是, 通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔
  const len = arr.length

  // 设置一个用来比较数据的间隔
  let gap = 1
  // 合适的 gap 可以提升这个算法的效率
  // Robert Sedgewick定义了一个动态计算初始间隔值的方式
  while (gap < len / 3) {
    gap = 3 * gap + 1
  }

  // 当gap = 1的时候, 其实就是插入排序了
  while (gap >= 1) {
    // i 设置成 gap, 再将 j 设为 i
    // 即实现了每 gap 间进行比较
    for (let i = gap; i < len; i++) {
      // 设为 i
      for (
        let j = i;
        j >= gap &&
        // 加上判断大小的条件, 如果前一个 gap 比后一个 gap 还大就没啥可比较的了
        arr[j] < arr[j - gap];
        j -= gap
      ) {
        // 将最小的元素与 j 交换
        const temp = arr[j]
        arr[j] = arr[j - gap]
        arr[j - gap] = temp
      }
    }
    // 计算一个新的间隔值
    gap = (gap - 1) / 3
  }
  return arr
}
