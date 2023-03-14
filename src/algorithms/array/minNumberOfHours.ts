/**
 * 2383. 赢得比赛需要的最少训练时长
 * @param initialEnergy 初始精力
 * @param initialExperience 初始经验
 * @param energy 对手的精力组合
 * @param experience 对手的经验组合
 */
export function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[],
): number {
  // 模拟 + 贪心
  // 精力越用越少，所以初始精力要大于所需的全部精力
  // 经验越打越多，所以打过强的敌人后，一定打得过弱的敌人，所以初始经验取决最强的敌人减去前面比他弱的敌人

  // 计算总和精力
  let ans = Math.max(energy.reduce((e, ne) => e + ne, 1) - initialEnergy, 0)
  // 计算最大经验
  for (const e of experience) {
    if (e >= initialExperience) {
      ans += e + 1 - initialExperience
      initialExperience = e + 1
    }
    // 获得对手的经验
    initialExperience += e
  }
  return ans
}
