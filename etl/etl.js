export const transform = scores => Object.fromEntries([...{
  ...scores,
  * [Symbol.iterator] () {
    for (const [score, letters] of Object.entries(this)) {
      for (const letter of letters) {
        yield [letter.toLowerCase(), +score]
      }
    }
  }
}])
