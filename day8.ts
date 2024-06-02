// //Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let faimly:string[]=["father","mother","brother","sister"];
console.log(faimly[4]);// international error, array start with 0 index
console.log(faimly[3]);//correct error




// //Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let bike = "honda";

//True Test
console.log("bike === `honda` ? predict true")
console.log(bike === `honda`);

console.log("bike != `unique` ? predict true")
console.log(bike != `unique`);

console.log("bike.length == `5` ? predict true")
console.log(bike.length == 5);

console.log("bike !== `super star` ? predict true")
console.log(bike !== `super star`);

console.log("bike <= `super star` ? predict true")
console.log(bike <= `super star`);

//False Test
console.log("bike === `suzuki` ? predict false")
console.log(bike === `suzuki`);

console.log("bike != `honda` ? predict false")
console.log(bike != `honda`);

console.log("bike.length == `4` ? predict false")
console.log(bike.length == 4);

console.log("bike !== `honda` ? predict false")
console.log(bike !== `honda`);

console.log("bike >= `super star` ? predict false")
console.log(bike >= `super star`);




// //Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

let car = "sabaru";
let age = 40;
let fruits = ["mango","orange","banana"];
let person = {name:"saleem",age:40};

// equality with string
console.log("testing equality with string:");
console.log("apple" == "apple"); // presict true
console.log("apple" == "Apple"); // presict false

// using lower case function
console.log("testing lower case function:");
console.log("APPLE".toLocaleLowerCase()== "apple"); // presict true

// Numerical
console.log("Numerical:");
console.log(10 > 5); // True
console.log(2 < 1); // False
console.log(15 >= 15); // True
console.log(20 <= 10); // False

// using "and" and "or" operators
console.log("using with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
console.log((5 > 3) && (10 < 20)); // True
console.log((5 > 3) || (10 > 20)); // True
console.log((5 < 3) || (10 > 20)); // False

// whether an item is in an array
let fruit = ["mango","orange","banana"];
console.log("Is 'mango' in fruits?");
console.log(fruit.includes("mango")); // True

// whether an item is not in an array
console.log("Is 'apple' not in fruits?");
console.log(!fruits.includes("apple")); // True

// Object property check
let cars = { brand: 'Toyota', model: 'Corolla', year: 2020 };
console.log("Does the car have a 'brand' property?");
console.log('brand' in cars); // True

console.log("Does the car have a 'color' property?");
console.log('color' in cars); // False
