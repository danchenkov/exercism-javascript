const ALPHABET = 26
export const isPangram = (input) => [...input.toLowerCase()].sort().filter((item, pos, array) =>
  (item >= 'a' && item <= 'z' && (!pos || item !== array[pos - 1]))).length === ALPHABET
