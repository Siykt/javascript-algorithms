/**
 * 合并两个有序数组
 * @param nums1 升序数组1
 * @param m 升序数组1的长度, 非length
 * @param nums2 升序数组2
 * @param n 升序数组2的长度, 非length
 */
export function mergeSortedArrayByInsertAndSort(nums1: number[], m: number, nums2: number[], n: number) {
  let j = 0
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0 && j < n) {
      // 直接更新
      nums1[i] = nums2[j++]
    }
  }
  nums1.sort((a, b) => a - b)
  return nums1
}
