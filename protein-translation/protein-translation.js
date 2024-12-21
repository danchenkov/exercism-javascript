const POLYPEPTIDES = [
  "STOP", "Methionine", "Phenylalanine", "Leucine", "Serine", "Tyrosine", "Cysteine", "Tryptophan"
]

const CODONS = {
  "AUG": 1, "UUU": 2, "UUC": 2, "UUA": 3, "UUG": 3, "UCU": 4, "UCC": 4, "UCA": 4, "UCG": 4, "UAU": 5, "UAC": 5, "UGU": 6, "UGC": 6, "UGG": 7, "UAA": 0, "UAG": 0, "UGA": 0,
};

export const translate = (rna) => (rna ? rna.match(/..?.?/g) : []).reduce((sequence, codon) => {
  if ((sequence.stop) || (codon.length === 0)) return sequence
  if ((CODONS[codon] === undefined) || (codon.length !== 3)) throw new Error('Invalid codon')
  if (!CODONS[codon]) sequence.stop = true
  else sequence.codons.push(POLYPEPTIDES[CODONS[codon]])
  return sequence
}, { codons: [], stop: false }).codons
