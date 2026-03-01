//let user: number = 1;
// console.log(`Welcome ${user} to TypeScript! `);

// let firstName: string = "Priyanka"; 
// let lastName: string = "Shanmugam";
// let age1: number = 24; 
// let isTester: boolean = false; 
 
// console.log(`Name: ${firstName}`); 
// console.log(`Age: ${age}`); 
// console.log(`Tester: ${isTester ? "Yes" : "No"}`);
//console.log(`Name:${firstName}`,`LastName:${lastName}`,`Age:${age}`,"is a",`Tester:${isTester}`);

//let username: string | undefined; 
//console.log(username);      
// username = "Giri"; 
// console.log(username); 

let user : {name:string ; age?:number} = {name : "Giri"};
const {name : userName , age = 80} = user;
console.log(userName);
console.log(age);


