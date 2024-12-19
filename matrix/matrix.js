//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const transpose = matrix => 0 < matrix.length ? (matrix[0].map((_, col) => matrix.map(row => row[col]))) : []

export class Matrix {
  #rows
  #columns

  constructor(input) {
    this.#rows = input.split(/\r?\n/).map((line) => line.split(' ').map(Number))
  }

  get rows() {
    return this.#rows
  }

  get columns() {
    if (!this.#columns) this.#columns = transpose(this.#rows)
    return this.#columns
  }
}