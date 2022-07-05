//object literals

// math object

console.log(Math); // gives math equations in condole
console.log(Math.PI); // 3.14 - pi
console.log(Math.E); // like pi

const area = 5.3;

console.log(Math.round(area)) // rounds it to nearest whole number
console.log(Math.floor(area)) // floors it to its original number
console.log(Math.ceil(area)) // rounds it up
console.log(Math.trunc(area)) // takes away the decimal and leaves the integer

//random numbers

const random = Math.random();

console.log(random); //gives a random number every time between 0-1 
console.log(Math.round(random * 100)); //random number between 1 and 100
console.log(Math.round(random)); // random number 1 or 0