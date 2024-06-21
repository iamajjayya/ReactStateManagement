const numbers  = [10 ,20 ,30 ];
let total = 0

for (const n  of numbers) {
      total += n;
}

console.log(total)


const result = numbers.reduce((cv, n ) => { return cv+n}, 0)

console.log(result)

