/**
 *  189. 轮转数组
 * @description 使用拼接数组处理
 * @param nums 数组
 * @param k 轮转值
 */
export function rotateArrayBySplice(nums: number[], k: number) {
  // 最快平移动
  const len = nums.length
  k = k % len
  const kn = nums.slice(len - k)
  nums.splice(len - k, k)
  nums.unshift(...kn)
}
