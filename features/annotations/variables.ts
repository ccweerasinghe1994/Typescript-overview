// variables

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects

let now: Date = new Date();

// Arrays

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6];


// class
class Car { }

let car: Car = new Car();

// object literaral 

let point: { x: number; y: number } = {
    x: 12,
    y: 20
}

// function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);

}

// when to use type annotations

//  1) function that return the "any" type

const json = '{"x":10,"y":30}';
const cordinants:{x:number,y:number} = JSON.parse(json);
console.log(cordinants);

