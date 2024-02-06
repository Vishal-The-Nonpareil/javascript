## Js is dynamically typed language. that means we don't have to define the  declared the datatype of variable

## print 
console.log("Hello World");

## string 
fullName = "Tony Stark";

## int 
age = 25;

## float 
price = 99.99;

## null 
a = null;   // ---->  represents an intentional absence of a value.

## undefined 
y = undefined; // ---->  A variable that has not been assigned a value

## Boolean 
isFollow = true; 

## print 
console.log(y);

fullName = 25;

console.log(fullName);

## assignment operator (=)

a = b;

## Variable Rules :

- Variable name are case sensitive, "a" & "A" is diffrent. 

- Only letters, digits, undercase(_) and $ is allowed. (not even space)

```
$fullName
_fullName
full-name
```

- Only a letter, underscore(_) or $ should be 1st character.

- Reserved words cannot be variable names.

# Keywords we use in JS

## var: (before ES6 2015)

- Variable can be re-declared and updated. (global scope) variable.

```

```

## let: (In ES6 after 2015)

- Variable cannot be re-declared but can be updated. A (block scope) variable.

```

let a;

console.log(a); ----> undefined

{

    let a = 5;
    let a = 10;
    console.log(a); ----> error
}

{
    let a = 10;
    console.log(a);

    output = 10;
}

let age = 25;
age = 24;
age = 26;

let age = 22; X
let fullname = "Tony Stark";
```

## const: (In ES6 after 2015)  ES6 - (Modern JavaScript)

- Variable cannot be re-declared or updated. A block scope variable.

- contants whose value can not be change;

```
const a;

console.log(a); -----> error

constant age = 24;

age = 26; X

```

# Data types in JS:

### Primitive:

- number, string, Boolean, Undefined, Null, bigInt, Symbol


```
let age = 25;

type of age;
    // output: number


let x = (BigInt)44;
```

### Object:

- it is a collection of diffrent values.

- it store value in form of KEY and VALUE

```

<!-- key = "value" -->

const student = {
    fullName = "Vishal",
    age: 25,
    cgpa: 8.2
    isPass = true,
};

let a = 25;

student["age"] = student["age"] + 1

console.log(student);

typeof student

student["fullName];

console.log(student["age]);
console.log(student["cgpa]);

```

- Arrays, Function

### Q.1 Create a const object called "product" to store information,

```

const product = {
    name: "Ball pen".
    rating: "4".
    offer: 5,
    price: 270,
};

typeof product;


"abcd" + 123;

= abcd123

"1234" + 12

= 123412
 
```

### Q.2 Create aconst object caled "profile" to store information.

```

const profile = {
    uname: "visshal",
    fullName: "vishal saini".
    isFollow: "false"
    followersCount: 143.
};

console.log(typeof profile["followersCount"]);

```

### Comments in JS:

- part of code which is not executed

```

// This is variable

const a = 32;

// this is single line comment

/* this is multi
 line comment */

```

## Operators in JavaScript:

- Used to perform some operation on data.
- +, -, *, / 
- Modulus
- Exponentiation
- Increment
- Decrement

### Arithmetic Operators ( +, -, *, / ):
  
 ```

let a = 5;
let b = 3;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
 
``` 

#### Modulus

```
let a,b;
a = 5;
b = 2;

console.log(a % b);

 = 1 remainder

```

#### Exponentiation

```
console.log("a ** b = ", a ** b); // (5^2)

= 25 ( 5 to the power 2)
```

## Unary Operator: 

#### 1. Increment

```
let a = 5;
let a = 2;

console.log("a = ", a, " & b = ", b);

//post increment
a = a++; //6
console.log("a = ", a); //6

// pre increment
let a = 5;
let b = 2;

console.log("a++ = ", a++); //5
console.log("a = ", a); //6
```

#### 2. Decrement

```

// pre decrement
a = a--; //5
console.log("a = ", a); //5

// post decrement
let a = 5;
let b = 2;

console.log("a- = ", a--); //5
console.log("a = ", a); //4
```

## Assignment Operator

```

= 
+=   a += 1; a = a + 1;
-=   a -= 1; a = a - 1;
*=   a *= 1; a = a * 1;
%=   a %= 1; a = a % 1;
**=  a **= 1; a = a ** 1;
```

## Comparison Operators:

```
Equalto ==

Not Equal !=

Equalto & type ===

Not equalto & type !==

{
    >, >=, <, <=
}
```

# Logical Operator:

## Logical AND (&&)  [both condition true ---> true ]

## Logical OR (||) [one condition neee to be false ---> false] 

## Logical NOT (!) 


# Conditional Statement:

- To implement some condition in the code

### if Statement

```

let color;

if(mode === "dark-mode"){
    color = black;
}

if(mode === "light"){
    color = "white";
}

let age = 18;

if (age >= 18){
    console.log("you can vote");
}

if (age < 18){
    console.log("you cannot vote");
}

if (age >= 18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}


if(mode === "dark-mode"){
    color = black;
}else{
    color = "white";
}
```

##  Q.3 Find number is odd or even.

```
let num = 10;

if(num%2 === 0){
    colsole.log(num, " is even");
}else{
    console.log(num, " is odd");
}
```

## else-if statement:


```
let mode = "dark";
let color;

if (mode === "dark"){
    color = "black"
}else if(mode === "blue"){
    color = "blue";
}else if(mode === "purple"){
    color = "purple";
}else{
    color = "white";
}

```

## ternary Operator:

condition ? true output : false output;


```

age > 18 ? "adult" : "Not Adult";
age > 18 ? console.log("adult") : console.log("Not Adult")


let result = age > 18 ? "adult" : "Not Adult";

```

## Q.4 Get user to nput a number using prompt("Enterr a number:"). Check if the number is a multiple of 5 or not.

```

let num = prompt("Enter a number");

if(num%2 === 0){
    console.log(num, " is multiple of 5");
}
else{
    console.log(num, " is not multiple of 5");
}

```

## Q.5 Write a code which can give grades to students according to their scores.

90-100, A
70-89, B
60-69, C
50-59, D
0-49, F

```
let score = prompt("Enter your score");
let grade = null;

if(score >= 90 && score <= 100){
    grade = A;
}else if (score >= 70 && score <= 89){
    grade = B;
}else if (score >= 60 && score <= 69){
    grade = C;
}else if (score >= 50 && score <= 59){
    grade = D;
}else if (score >= 0 && score <= 49){
    grade = F;
}

console.log("According to your score your grade is: ", grade);
```

## Loops In JavaScript:

- Loops are used to execute a piece of code again and again.

### for loop:

```
for(let i = 1; i <= 5; i++){
    console.log("Hello JavaScript");
}
```

## Q.5 Calculate sum of 1 to 5

```

let sum = 0;

for( let i = 1; i <= 5; i++){
    sum = sum + 1; // sum = 6
    <!-- sum += 1; -->
}
```

## Infinite loop:

```

let n = 0;

for(let i = 1; i <= n; i++){
    console.log("Hello");
}

loop that never end

```

## While loop:

```

 let i = 1;

 while(i <= 5){
    console.log("Hello")
    i++;
 }

```

## Do-while:

```

let i = 1;

do{
    console.log("Hello")
    i++;.
} while(i <= 5);

```

## for-of Loop:

```

for(let val of strVar){
    //do something
}


let str = "javascript";

let size = 0;

for(let i of str){ // return value
    // iterator -> characters
    console.log("i= ", i);
    size++;
}

console.log("string size = ", size); //10

```

## for-in Loop:

```

let student = {
    name: "Rahul",
    age: 22,
    cgpa: 7.5,
    isPass: true,
};

for(let key in student){ // return key
    console.log("key= ", key, " Value= ", student[key]);
}

```

### Q.6 Print all even number from 0 to 100.

```


for(let num = 0; num <= 100; i++){
    if(num%2 === 0){
        console.log("num = ", num);
    }
}

```

### Q.7 Create a game where you start any random game numkber. Ask the user to keep guessing the game number until the user enters correcr value.

```
let gameNum = 25;

let userNum = prompt("Guess the game number : ");


while(userNum != gameNum) {
    prompt("You enter wrong number please guess again");
}

console.log("Congratulations, you entered the right number");

```

## Strings in JavaScript:

- String is a sequence of characters used to represent text.

```
// Create String
let str = "Hello Javascript";

// String Length
str.length

// String Indices
str[0], str[1], str[2]


let str = "Hello JS";

let str2 = 'hello Javascript';

str.length

str2.length

console.log(str[3]);

```

## Template Literals:

- special type of string

- A way to have embedded expressions in strings

```

`this is a template literals`

```


```
let obj = {
    item: "pen",
    price: 10,
};


let specialString = `This is a template literals`;
console.log(typeof specialString);


let output = `the cost of ${obj.item} is ${obj.price} rupees`

console.log(output);

```


### String Interpolation

- To create string by substitution of placeholders

- String interpolation and template literals are same

```

`string text ${expression} string text`

```

### escape characters:

```

console.log(Hello \n JavaScript);
console.log(Hello \t JavaScript);

console.log(str.length);

// it take 1 length of character = \n is one character length


console.log(Hello \n JavaScript);
console.log(Hello \n JavaScript);

```

## String Methods in Javascript:

- String are immutable in javascript (that means cannot be change)

These are built-in functions to manipulate a string


```

- str.toUpperCase()

- str.toLowerCase()

-str.trim() // removes whitespaces



// method can not change orignal string it will always give new string.

let str = "Hello JS";

newString = str.toUpperCase();
console.log(str);
console.log(newStr);

str.toLowerCase
console.log(str);


let str = "     Hello    JavaScript; 
str.trim();

str.slice(start,end?) // return part of string

let str = "0123456"
let str1 = "Hello"
console.log(str.slice(1,6));
console.log(str1.slice(0,3));

// str1.concat( str2) //joins str2 with str1
let str1 = "Hello";
let str2 = "Javascript";

letd res = "hello" + 123;

console.log(res);


// str.replace( searchVal, newVal);

let str = "hellohhh"
console.log(str.replace("lo", "p"));
console.log(str.replaceAll("h", "n"));

str.charAt( idx )
let str = "IloveJS"
console.log(str.charAt(3));

```

## Q.8 Prompt the user to enter their full name. generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. eg: username = "vishal", username should be "@vishal6".

```

let username = prompt("Enter your name");

console.log(`@${username}+${username.length}`);

```

## Arrays: 

collection of items.

```
// object
let marks = {
    std1: 97,
    std2: 67,
}

linear form of store data

let heroes = [ "ironman", "spiderman", "thor"];
let marks = [ 43, 65, 75, 37 ];


console.log(marks.length); // property
console.log(marks.length);  // .length is property
typeof marks;

```

### Array indices:

```
arr[0], arr[1], arr[2]

marks = [42, 21, 52, 75, 26]

marks.length

marks[4] = 77;

marks = [42, 21, 52, 75, 77];
```

#### Arrays are mutable in js.

### Looping over an Array:

```
let heroes = ["ironman", "thor", "hulk", "spiderman", "antman", "shaktiman"];

// print all elements of array

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}


for(let i of heroes){
    console.log(i);
}

let cities = ["delhi", "pune", "mumbai", "gurugram"];

for(let city of cities){
    console.log(city.toUpperCase())
}

```

## Q.1 marks = [85, 97, 44, 37, 76, 60]

```
let marks = [85, 97, 44, 37, 76, 60]
let sum = 0;

for(let i of marks){
    console.log(i)
    sum += i;
}

console.log(sum);
```

## Q.2 price = [250, 645, 300, 900, 50];

```
let price = [250, 645, 300, 900, 50];

let index = 0;

for(let i of price){
    console.log();
    index++;
}

```

### Array Methods:

let foodItems = ["potatos", "apple", "litchi", "tomato"];

```

.push("value")
.pop();
.toStrings();

.upperCase();
.shift("")
.unshift("");
.slice(0, 3);
.splice(startIdx, delCount, newEl1);

```

```

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();

companies.splice(2,1,"Ola");

companies.push("amazon");

```


## Function in javaScript:

Block of code that perform a specific task, can be invoked whenever needed.


```
function myFunction(){
    console.log("Hello javaScript");
    console.log("Learning JS");
}
myFunction();


function myFunction(msg){   // parameter
    console.log("Hello javaScript");
}
myFunction("JavaScript") // arguments


function sum(a,b){
 
 //local variable --> scope variable

    sum = a+b;
    console.log(a+b);
    return sum;
}

console.log(sum(5,7));

```

## Arrow Functions:

simple way to write function
compact way to write a function

```
(a,b) => {
    return a+b;
}

const functionName = (param1,param2) => {
    //do something
}

const arrowMult(a,b) => {
    return a*b;
}
arrowMult(3,6);

```

#### Q.1 

```
// function countVowels(str){
//     let count = 0;
    
//     for(const char of str){
//         if(char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("apnacollege");

// const cVow = (str) => {
//     let count = 0;
    
//     for(const char of str){
//         if(char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"){
//             count++;
//         }
//     }
//     console.log(count);

// }

```

### forEach loop in Arrays:

arr.forEach (callbackFunction)

Callbackfunction: Here, it is a function to execute for each element in the array

// A callback is a function passed as an argument to another function

```
let arr = [31, 1, 13, 53, 12];

arr.forEach(function printValue(val) {
    console.log(val);
});

//Arrow function

let arr = [31, 1, 13, 53, 12];

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
})

```

### Higher order function:

function that accepts functions as parameters and/or returns a function.

```
let nums = [2, 3, 4, 5, 6];

nums.forEach( (val) => {
    console.log(val*val);
})
```

## Some More Array Methods: 

- Creates a new array with the result of some operation. the value its callback returns are used to from new array

arr.map(callbackFnx(value, index, array))

```

let newArr = arr.map((val) => {
    return val*2;
})

let nums = [67, 52, 39];

let newArr = nums.map((val) =>{
    return val*val;
})

console.log(newArr);

console.log(nums);

```

## Filter Method:

creates a new array of elements that gives true for a condition/filter eg: all even elements

```

let newArr = arr.filter( (val) => {
    return val%2 ===0;
})

```

```
let newArr = arr.filter( (val) => {
    return val%2 !==0; //odd value
})
```

### Reduce Array Method:

Perform some operation & reduces the array to single value. it returns that single value.


```


```