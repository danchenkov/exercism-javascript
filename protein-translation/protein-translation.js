const PROTEINS = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine', UUC: 'Phenylalanine',
  UUA: 'Leucine', UUG: 'Leucine',
  UCU: 'Serine', UCC: 'Serine', UCA: 'Serine', UCG: 'Serine',
  UAU: 'Tyrosine', UAC: 'Tyrosine',
  UGU: 'Cysteine', UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP', UAG: 'STOP', UGA: 'STOP',
  get ERROR() { throw new Error('Invalid codon'); },
}

export const translate = (codons = '') =>
  codons.match(/(.{1,3})/g)?.reduce(([proteins, stopped], codon) =>
    (stopped || PROTEINS[codon] === 'STOP') ? [proteins, true] :
      [[...proteins, PROTEINS[codon] || PROTEINS.ERROR], false],
    [[], false])[0] || [];