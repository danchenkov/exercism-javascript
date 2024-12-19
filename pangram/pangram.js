//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = 26
export const isPangram = (input) => [...input.toLowerCase()].sort().filter((item, pos, array) =>
  (item >= 'a' && item <= 'z' && array.indexOf(item) === pos)).length === ALPHABET
