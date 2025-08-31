function add(a, b) {
  return a + b;
}
console.log(add(2, 4));

console.log(add("Hello, ", "world!")); // Output: Hello, world!

let accountState;
console.log(accountState);

/*
  var is a block scope and can be redeclare as well as reupdate 
  let is function scope and can't be redeclaration but we can update the value
*/

var a = 10;
var a = 20;
console.log(a);

//this is the one block
{
  let a = 230;
  a = 245;
  console.log(a);
}

{
  const c = 1245;
  const d = 3.14;
  console.log(c);
}

//datatype in js

let n = 10;
console.log(typeof n);

//convert num to String
console.log(typeof n.toString());

//convert String to num

{
  let n = "123";
  console.log(n + 1); //String + int it will append 1231
  // console.log(Number(n));
  let char = "c";
  console.log(char + 1);
  //convert String num to int
  console.log(parseInt(n));
}

// "use strict"; it will treat newer version of js

// alert("Hello"); //we are using node not browser

// let input=prompt("Enter something");
// console.log(input);

//datatype in js
{
number=10;
console.log(typeof number);
}
isNum=true;
console.log(isNum);

Boolean =false;
console.log(Boolean);

let value=null;
console.log(value);
console.log(typeof value);

let hi;
console.log(hi);
console.log(typeof hi);

const accountId=1234;
console.log(accountId);

console.log(3+1);
console.log("Hitesh")

let name="Hitesh";
let age=14; 
let isLoggedIn=true;
console.log(isLoggedIn);
console.log(name);
console.log(age);
console.log(2**53);
// console.log();
let state;
console.log(state);
console.log(typeof state);

let states=null;
console.log(states);
console.log(typeof states);

// let BigInt;
// console.log(valueof(BigInt));

let num=123456789078747573476n;
console.log(num.valueOf());

let str=" ";
console.log(str);
// console.log("Hello");

let boolean =true;
console.log(boolean);

console.log(typeof "hitesh");

console.log(typeof age);

console.log(typeof null);

















