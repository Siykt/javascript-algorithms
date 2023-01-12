/**
 * 283. 移动零
 * @param nums 数组
 */
export function moveZeroes(nums: number[]): void {
  // 思路: 双指针
  // 1. 额外创建一个指针推进非 0 元素, 在遇到非 0 元素时推进并将其保存至前方
  // 2. 当遍历完成后, 该指针就将指向最后一个非 0 元素的位置
  // 3. 所以我们只要替换后续所有的元素为 0 即可

  const len = nums.length
  // 额外一个推进非 0 元素的指针
  let p = 0
  for (let i = 0; i < len; i++) {
    // 非 0 情况
    if (nums[i]) {
      // 推进非 0 指针并将其保存至前方
      nums[p++] = nums[i]
    }
  }
  // 当遍历完成后 p 指向的就是最后一个非 0 元素的位置
  // 所以我们只要替换后续所有的元素为 0 即可
  while (p < len) nums[p++] = 0
}
