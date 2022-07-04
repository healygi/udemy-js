// variables & block scope
// this variable is in the root of the document - global scope. Can be accessed outside if statement and inside statement
let age = 30

if(true) {
  let age = 40 //local scope - only exists/valid in code block
  console.log(age); 
}

//function declaration

function greet() {
    console.log('hello');
}

greet();

//function expression
const speak =function(){
    console.log('good day');
};

speak();

// arrow function shortens regualr functions

const calcArea = (radius) => {
  return 3.14 * radius ** 2 
};

or 

const calcArea = radius => 3.14 ** 2

const greet = () => 'hello, world';

const bill = (products, tax) => {
  
}

