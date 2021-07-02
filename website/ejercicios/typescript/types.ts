// Boolean
let muted: boolean = true;

// Number
let age = '6';
let numerator: number = 10;
let denominator: number = 5;
let result = numerator/denominator;

// String
let nombre: string = 'Fredy';
let greeting = `Hi, I am ${nombre}`;

// Array
let people: string[] = [];
people = ["Isabel", "Nicole", "Saul"];
// people.push(9000) Cannot push a number into string array

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Isabel");
peopleAndNumbers.push(9000);

// Enum
enum Color {
    Red = "Red",
    Green = "Green", 
    Blue = "Blue"
}

let favoriteColor: Color = Color.Red;
console.log(`My favorite color is ${favoriteColor}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard'};

// Object 
let someObject: object = { type: 'Wildcard'};