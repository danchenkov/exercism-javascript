//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = scores => Object.fromEntries([...{
  ...scores,
  *[Symbol.iterator]() {
    for (const [score, letters] of Object.entries(this)) {
      for (const letter of letters) {
        yield [letter.toLowerCase(), +score]
      }
    }
  }
}])
