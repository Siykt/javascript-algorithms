/**
 * 2379. 得到 K 个黑块的最少涂色次数
 * @param blocks 字符
 * @param k 连续值
 */
export function minimumRecolors(blocks: string, k: number): number {
  // 滑动窗口
  // 维护W的数量
  let w = 0
  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') w++
  }
  let ans = w
  // 以k作为右侧缩减窗口
  for (let i = k; i < blocks.length; i++) {
    // 左侧非白移出
    if (blocks[i - k] === 'W') w--
    // 右侧非白增加
    if (blocks[i] === 'W') w++
    ans = Math.min(ans, w)
  }
  return ans
}
