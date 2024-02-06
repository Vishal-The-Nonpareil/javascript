// let marks = prompt("Enter your marks")
// let grade;

// if(marks >=90 && marks <=100 ){
//     grade = "A"
// }else if(marks >= 70 && marks <= 89 ){
//     grade = "B"
// }

// console.log(grade);

// for(let i=0; i<5; i++){
//     console.log("Javascript");
// }

// let str = "Apna College"

// let size = 0;

// for(let i of str){
//     console.log(i);
//     size++;
// }

// console.log(size);


// let student = {
//     name: "Rahul",
//     age: 20,
//     cgpa: 8.2,
//     isPass: "ture",
// };

// for(let i in student){
//     console.log(i,  student[i]);

// }


// for(let num=0; num<=100; num++){
//     if(num%2==0){
//         console.log(num);
//     }else{
//         console.log("odd number: ", num);
//     }
// }

// let gameNum = 7;
// let userNum = prompt("Enter game number");

// while(userNum != gameNum){
//     userNum = prompt("try Again");
// }

// console.log("Win!");


// let fullname = prompt("Enter your fullname");

// // console.log(`@${fullname}fullname.length`);
// console.log("@" + fullname +  fullname.length);

// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;

// for(let i of marks){
//     console.log(i)
//     sum += i;
// }
// console.log(sum);

// let avg = sum / marks.length;
// console.log(`avg marks of student ${avg}.`);


// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of items){
//     console.log(`index ${i} , value: ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }



// for(let i=0; i< items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer; 
// }

// console.log(items);


// let foodItems = ["potatos", "apple", "litchi", "tomato"];

// foodItems.toString();


// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// // companies.shift();

// companies.splice(2,1,"Ola");

// companies.push("amazon");

// function sum(a,b){
//     sum = a+b;
//     console.log(a+b);
//     return sum;
// }

// console.log(sum(5,7));


// let str = "ApnaCollege";
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
// let arr = [31, 1, 13, 53, 12];

// arr.forEach(function printValue(val) {
//     console.log(val);
// });

// let arr = [31, 1, 13, 53, 12];

// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr);
// })

// let nums = [2, 3, 4, 5, 6];

// nums.forEach( (val) => {
//     console.log(val*val);
// })

// let nums = [67, 52, 39];

// let newArr = nums.map((val) =>{
//     return val*val;
// })

// console.log(newArr);

// console.log(nums);

