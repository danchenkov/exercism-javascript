export const compute = (strandA, strandB) => {
  if (!strandA.length && strandB.length) throw new Error('left strand must not be empty')
  if (strandA.length && !strandB.length) throw new Error('right strand must not be empty')
  if (strandA.length !== strandB.length) throw new Error('left and right strands must be of equal length')
  return strandA.split('').reduce((hammingDistance, nucleotide, index) => hammingDistance + (strandB[index] !== nucleotide), 0)
}
