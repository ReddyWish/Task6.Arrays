const numbers = [10, 4, 100, -5, 54, 2];

let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += (numbers[i] )**3
//
// }
// console.log(sum)


// for (let item of numbers) {
//    sum += item ** 3
// }
// console.log(sum)


// numbers.forEach((item) => {
//   sum += item ** 3
// })
// console.log(sum)


sum = numbers.reduce((acc, item) => {
    return acc + item ** 3
}, 0)
console.log(sum)

