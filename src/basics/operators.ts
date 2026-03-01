//Airtematic Operators 
console.log("Airthemetic Operators");
let a: number = 5; 
let b: number = 2; 
console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b);  

//Assignemnt Operators
console.log("Assignment Operators");
let num: number = 7; 
 
num += 5;     
console.log(num); 
num -= 3;      
console.log(num); 
 
//Comparision Operators
console.log("Comparision Operators");
let x: number = 7; 
let y: number = 3; 

console.log(x == y); 
console.log(x != y); 
console.log(x > y); 
console.log(x < y); 
console.log(x >= y); 
console.log(x <= y);

//Logical Operators
console.log("Logical Operators");
let age: number = 32; 
let hasID: boolean = true; 
console.log(age >= 18 && hasID);   
console.log(age >= 30 || hasID);  
console.log(!hasID);   

//increment and Decrement operators
let count: number = 3; 
 
console.log("Increment and Decrement Operators");
console.log(count++); // post-increment → prints 3, then becomes 4
console.log(count);   // 4
 
console.log(++count); // pre-increment → becomes 5, then prints 5 
console.log(--count); // pre-decrement → becomes 4

//Ternary Operator
console.log("Ternary Operators");
let marks: number = 70; 
 
let result = (marks >= 50) ? "Pass" : "Fail"; 
console.log(result);