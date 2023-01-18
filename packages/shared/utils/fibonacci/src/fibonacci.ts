const memo = new Map<number, number>()

/**
 * @returns num'th fibonacci number
 */
export default function fibonacci(num: number): number {
  if (memo.has(num)) {
    return memo.get(num)
  }

  if (num <= 1) {
    return 1
  }

  memo.set(num, fibonacci(num - 1) + fibonacci(num - 2))

  return memo.get(num)
}
