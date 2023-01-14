export function gcd(n: number, m: number): number {
  if (m === 0) return n
  if (n === 0) return 0
  return gcd(m, n % m)
}
