const transform = scores => Object.fromEntries([...{
  ...scores,
  * [Symbol.iterator] () {
    for (const [score, letters] of Object.entries(this)) {
      for (const letter of letters) {
        yield [letter.toLowerCase(), +score]
      }
    }
  }
}])

const SCORES = transform({
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
})

export const score = word => [...word.toLowerCase()].reduce((score, letter) => SCORES[letter] + score, 0)

let multiplier, prevLetter
export const scoreBonus = word => [...word.toLowerCase()].reduce((score, letter) => {
  multiplier = letter === prevLetter ? (multiplier === 2 ? 3 : 2) : 1
  prevLetter = letter
  return SCORES[letter] * multiplier + score
}, 0)

// console.log(score("zooo"))
// console.log(scoreBonus("zooo"))
