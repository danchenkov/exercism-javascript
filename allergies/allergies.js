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
