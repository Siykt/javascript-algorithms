/**
 * 随机Int
 * @param min 最小值
 * @param max 最大值
 */
export function randomInt(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 随机Float
 * @param min 最小值
 * @param max 最大值
 */
export function randomFloat(min = 0, max = 1) {
  return Math.random() * (max - min) + min
}
