// ///////////////////////////////
// THE 3 BASICS OF A NEW LANGUAGE
// //////////////////////////////


// 1. The docs:
// MDM https://developer.mozilla.org/en-US/
// W3 https://www.w3schools.com/js/default.asp



// 2. How to run JS?
// node js-project/javascript/basics.js (ruby filename.rb)
// node (in terminal runs a JS console like IRB)
// browser console


// 3. How to print?

// puts p
console.log("Hello from basics.js!");







// //////////////////
// RUBY VS JAVASCRIPT
// //////////////////

// 1. variables and the lower camel case

// ruby lower_snake_case
// first_name = "Yoshi"

// JS lowerCamelCase
const firstName = "Yoshi"
console.log(firstName);

// reassigning a variable

// ruby
// first_name = "Nepo"

// firstName = "Nepo"  -> const can't be reassigned

// let age = 18
// age += 1
// age = 50

// console.log(age);

// var -> old way to define variables





// 2. interpolation

// ruby
// "My age is #{age}"
// console.log(`I am ${age} years old.`);



// 3. no float/integer

// ruby
// 30 intenger
// 30.5 float

// console.log(typeof(30)); // number
// console.log(typeof(30.5)); // number

// 4. how toString/parseInt works

// ruby
// "30".to_i -> 30
// 30.to_s -> "30"

// number to string
let number = 55;
number.toString();

// string to number
parseInt("55", 10);


// Base10 Binary
// 0      0
// 1      1
// 2      10
// 3      11
// 4      100
// 5      101



// 5. delete element in an array with splice
const students = [
  "Yoshi",
  "Lucas",
  "Maria",
  "Lance"
];

// ruby
// << or .push ADD
// .delete(element) .delete_at(index) DELETE

// students.push("Annie")

// console.log(students);

// array.splice(index where to start deleting, how many elements we want to delete from that index)

// students.splice(1, 1);
// students.splice(0, 2);

// console.log(students);

// read
students[0]
// students[-1] DOESN't WORK



// 6. iterate over an array

// students.each do |student|
//  code
// end

// students.forEach((student) => {
//   console.log(`${student} is amazing!`);
// });


// 7. join() returns adds commas

students.join(); // 'Yoshi,Lucas,Maria,Lance'
students.join(", "); // 'Yoshi, Lucas, Maria, Lance'
students.join("/"); // 'Yoshi/Lucas/Maria/Lance'


// 8. object, the magic dot! 


const student = {
  // key: value
  firstName: "Lance",
  age: 15,
  // 1: "first"
};

// How can we read first name?

// ruby hash_name[:key]
student["firstName"]

// dot notation

student.firstName
// student.1 doesn't work
// student["1"]

// no symbols in js


// 9. === VS == and if statement
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

let age = "17";

if (age >= 18) {
  console.log("You can vote!");
  
} else if (age === 17) {
  console.log("You can vote next year.");
  
} else {
  console.log("You can't vote yet.");  
}


// 10. the JS falsies:

// ruby false nil

false
0
null
""
undefined
NaN


// 11. JS arrow functions () => {}

// ruby
// def method_name(parameters)
//  code
// end

// method_name(arguments)

// JS function

const square = (num) => {
  // in JS return keyword in mandatory
  return num * num
}

// square(5);
console.log(square(5));


// inline fuction

const square_again = num => num * num 

// old way to make functions

function sayHi(name) {
  return `Hi ${name}`
}

console.log(sayHi("Paul"));
