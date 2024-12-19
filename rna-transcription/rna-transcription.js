//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dna2rna = new Map([['C', 'G'], ['G', 'C'], ['T', 'A'], ['A', 'U']])

export const toRna = ([...sequence]) => sequence.map(nucleotide => dna2rna.get(nucleotide)).join('')
