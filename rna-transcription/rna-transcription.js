const dna2rna = new Map([['C','G'],['G','C'],['T','A'],['A','U']])

export const toRna = ([...sequence]) => sequence.map(nucleotide => dna2rna.get(nucleotide)).join('')
