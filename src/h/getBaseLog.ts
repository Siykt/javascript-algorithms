/**
 * 求以 x 为底 y 的对数
 * @param x 底数
 * @param y 求值的指数
 * @returns logx(y)
 */
export function getBaseLog(x: number, y: number): number {
  return Math.log(y) / Math.log(x)
}
