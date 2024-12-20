//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const AllergiesList = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
]

export class Allergies {
  #allergies
  constructor(packed) {
    this.#allergies = packed.toString(2).split('').reverse()
  }

  list = () => AllergiesList.filter(e => this.allergicTo(e))
  allergicTo = query => AllergiesList.indexOf(query) > -1 && (this.#allergies[AllergiesList.indexOf(query)] == 1)
}
