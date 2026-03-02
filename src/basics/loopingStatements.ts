console.log("Looping Statements");

//for Loop  
console.log("\nfor Loop");
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}

//while Loop
console.log("\nwhile Loop");
let j: number = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

//do-while Loop
console.log("\ndo-while Loop");
let k: number = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

console.log("\nfor...of Loop");
let array: number[] = [10, 20, 30, 40, 50]; 
for (let value of array) {
    console.log(value);
}  

console.log("\nfor...in Loop");
let person = {
    name: "Alice",      
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

console.log("/nArray Destructuring with for...of Loop");
let numbers: number[] = [1, 2, 3, 4, 5];
for (let [index, value] of numbers.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}   

let fruits = ["Apple", "Banana", "Cherry"]; 
let [a, b, c] = fruits; 
console.log(a);   
console.log(b);   
console.log(c); 




