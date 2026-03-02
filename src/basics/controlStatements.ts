//if Statement
console.log("If Statement");
let age: number = 20; 
if (age >= 18) { 
console.log("You are eligible to vote."); 
}

//if-else Statement
console.log("\nIf-else Statement");
let number: number = 10;
if (number % 2 === 0) {
console.log("The number is even.");
} else {
console.log("The number is odd.");
}   

//if-else if-else Statement
console.log("\nIf-else if-else Statement");
let score: number = 85;             
if (score >= 90) {
console.log("Grade: A");
} else if (score >= 80) {
console.log("Grade: B");
} else if (score >= 70) {
console.log("Grade: C");
} else if (score >= 60) {
console.log("Grade: D");
} else {
console.log("Grade: F");
}   

//Switch Statement
console.log("\nSwitch Statement");
let day: number = 3;
switch (day) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");       
break;
case 4:
console.log("Thursday");        
break;
case 5:
console.log("Friday");
break;  
case 6:
console.log("Saturday");
break;
case 7:
console.log("Sunday");
break;  
default:
console.log("Invalid day");
break;
}

console.log("\nTernary Operator");
let isEven: boolean = (number % 2 === 0) ? true : false;
console.log(`Is the number ${number} even : ${isEven}`); 

console.log("\nNested if Statements");
if (number > 0) {
    if (number % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

