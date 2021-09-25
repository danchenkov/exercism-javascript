export const translate = (rna) => {
  if (!rna) return [];
  if (rna.match(/[^ACGU]/g) || rna.length % 3) throw new Error('Invalid codon');

  const POLYPEPTIDES = [
    "STOP", "Methionine", "Phenylalanine", "Leucine", "Serine", "Tyrosine", "Cysteine", "Tryptophan"
  ]
  const CODONS = {
    "AUG": 1,
    "UUU": 2,
    "UUC": 2,
    "UUA": 3,
    "UUG": 3,
    "UCU": 4,
    "UCC": 4,
    "UCA": 4,
    "UCG": 4,
    "UAU": 5,
    "UAC": 5,
    "UGU": 6,
    "UGC": 6,
    "UGG": 7,
    "UAA": 0,
    "UAG": 0,
    "UGA": 0,
  };

  let sequence = []
  // split RNA into codons
  let codons = rna.match(/...?/g)

  for (let i = 0; i < codons.length; i++) {
    if (!CODONS[codons[i]]) break
    sequence.push(POLYPEPTIDES[CODONS[codons[i]]])
  }

  return sequence
};
