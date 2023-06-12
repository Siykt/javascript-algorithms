/**
 * 169. 多数元素
 * @param nums 数组
 */
export function majorityElement(nums: number[]): number {
  // 摩尔投票法
  // 思路即为选一为可信投票
  // 每次遇见相同的投票则计数 + 1
  // 遇见其他投票投票则计数 - 1
  // 如果当前的可信投票计数归 0 则更换可信人
  let credible = nums.pop() as number
  let count = 1
  for (const n of nums) {
    // 遇见相同投票计数 + 1
    if (n === credible) count++
    // 遇见其他投票人计数 - 1 且检查当前可信人的计数是否归 0
    else if (--count === 0) {
      // 归 0 则更换可信人
      credible = n
      count = 1
    }
  }
  return credible
}
