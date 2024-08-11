// console.log(2>1);
// console.log("2">=1);//it first convert string to num and then compare =>true

// console.log("2"===1);//also check the datatype =>false

//avoid these conversions
// console.log(null==0); =>false
// console.log(null>=0); =>true
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//comparision and equality check both work differfently