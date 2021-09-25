// const old = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z']
// }

// export const transform = (oldScores) => {
//     var expected = {}
//     for (const [key, value] of Object.entries(oldScores)) {
//         for (var v of value) {
//             expected[v.toLowerCase()] = + parseInt(key)
//         }
//     }
//     return expected
// };

// export const transform = scores => Object.fromEntries([...{
//   ...scores,
//   *[Symbol.iterator]() {
//     for (const [score, letters] of Object.entries(this)) {
//       for (const letter of letters) {
//         yield [letter.toLowerCase(), +score];
//       }
//     }
//   }
// }]);

// const t = scores => [...{
//   ...scores,
//   *[Symbol.iterator]() {
//     for (const [score, letters] of Object.entries(this)) {
//       for (var letter of letters) {
//         yield[letter.toLowerCase(), +score]

//       }
//     }
//   }
// }]

// const tt = scores => {
//   for (const [score, letters] of Object.entries(scores)) {
//     for (const letter of letters) {
//       console.log([letter.toLowerCase(), +score])
//     }
//   }
// }

// tt(old)
// console.log(t(old))

// console.log([...{ 1: ['a'], 2: ['b', 'd'], * [Symbol.iterator] () { for (const [a, b] of Object.entries(this)) { yield [a * 2, b] } } }])

// const oldScores = { 0: ['a', 'b', 'c', 'd'], 1: ['e', 'f', 'g', 'h'] }
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
// console.log(transform(oldScores))
