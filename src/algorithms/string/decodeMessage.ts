const CODE = 'abcdefghijklmnopqrstuvwxyz'

/**
 * 2325. 解密消息
 * @param key 加密密钥
 * @param message 密文
 */
export function decodeMessage(key: string, message: string): string {
  // hash
  const hash: Record<string, string> = {
    ' ': ' ',
  }
  let l = 0
  for (let i = 0; i < key.length; i++) {
    const cur = key[i]
    if (cur in hash) continue
    hash[cur] = CODE[l++]
  }
  let ans = ''
  for (let i = 0; i < message.length; i++) {
    const cur = message[i]
    ans += hash[cur]
  }
  return ans
}
