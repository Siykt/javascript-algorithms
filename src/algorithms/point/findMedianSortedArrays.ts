/**
 * 寻找两个正序数组的中位数
 * @param nums1 数组1
 * @param nums2 数组2
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const allLen = nums1.length + nums2.length
  // 边界情况
  if (!allLen) return 0
  if (allLen === 1) {
    return nums1.length ? nums1[0] : nums2[0]
  }

  // 合并数组 O(n + m)
  const nums: number[] = []
  for (let p1 = 0, p2 = 0; p1 < nums1.length || p2 < nums2.length; ) {
    if (p1 === nums1.length) {
      nums.push(...nums2.slice(p2))
      break
    }
    if (p2 >= nums2.length) {
      nums.push(...nums1.slice(p1))
      break
    }
    if (nums1[p1] < nums2[p2]) {
      nums.push(nums1[p1])
      p1++
    } else {
      nums.push(nums2[p2])
      p2++
    }
  }

  const isDouble = allLen % 2 === 0
  const median = allLen / 2
  if (isDouble) {
    const medianNum = nums[median - 1] + nums[median]
    return medianNum ? medianNum / 2 : 0
  }
  return nums[Math.floor(median)]
}
