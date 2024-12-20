//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  let counter = 0

  if (Number.isNaN(n) || n <= 0) throw new Error('Only positive numbers are allowed')

  for (; n !== 1; counter++) {
    if (n % 2) n = 3 * n + 1
    else n = n / 2
  }

  return counter
}
