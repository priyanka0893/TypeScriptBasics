//DataTypes
let fName: string = "Priyanka"; 
let age: number = 28; 
let isWorking: boolean = true; 
let value: unknown = "Playwright"; 
console.log(fName, age, isWorking, value);

//enum datatype
enum Days { 
Monday, 
Tuesday, 
Wednesday 
} 
let weekDay: Days = Days.Tuesday; 
console.log(weekDay); 

//enum datatype = string
enum Day { 
Monday = "Day 1", 
Tuesday = "Day 2", 
Wednesday = "Day 3" 
} 
let weekDay1: Day = Day.Tuesday; 
console.log(weekDay1); 