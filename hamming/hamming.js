//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandA, strandB) => {
  if (strandA.length !== strandB.length) throw new Error('strands must be of equal length')
  return strandA.split('').reduce((hammingDistance, nucleotide, index) => hammingDistance + (strandB[index] !== nucleotide), 0)
}
