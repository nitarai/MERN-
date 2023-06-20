// console.log("hello world!")

// //using var keyword
// var a = "123";
// console.log(a);

// //using let keyword
// let b= "456";
// console.log(b);

// //using const
// const c = 789;
// console.log(c);

// alert("hello nita");

// const age = prompt("how old are you?");
// console.log(age);

// alert (" how old are you?");
// const isBoss = confirm("are you boss?");
// console.log(isBoss);

// let x = 1;
// let y = 2;
// if (x==1){
//     console.log("x is 1");
// }
// if ( x===1 && y === 2)
// {
//     console.log("&& operator tested");
// }
// if ( x===1 || y === 3)
// {
//     console.log("|| operator tested");
// }

// if (!x)
// {
//     console.log("x is not true");
// }

// if (x === 1)
// {
//     console.log(" x is 1");
// } else{
//     console.log("x is not 1");
// }
// let result = x ===1 ? "x is 1" : " x is not 1";

// let results = x ===1 ? "x is 1" : x === 2 ? " x is 2": "x is not 1 and 2";

// for (let i = 0; i<10; i++)
// {
//     console.log(i);
// }

// //learning about functions

// //ES5 style
// function add (a,b)
// {
//     return a+b;
//     console.log(a+b);
// }

// // ES6 style (arrow function)
// const add =(a,b) => {
//     console.log(a+b);
// }

// function area(a,b)
// {
//     return a*b;
// }

// add (1,2);
// area (2,3);

//objects

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     fullName : () => {
//     return `${person.firstName} ${person.lastName}`;
//     },
// };
    
// const c = person.firstName;
// const a = person.fullName();
// console.log(c,a);

//arrays
const arr =["saab", "volvo", "BMW"];
//access the first item
const b = arr[0];
//access the last item
const c = arr[arr.length-1];
console.log(b);
console.log(c);