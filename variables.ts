let apples: string = "hello";
let now: Date = new Date();
/*         Indicates Type                indicates Array */
let colors: string[] = ['red','green','blue'];


let myNumbers:number[] = [1,2,3];

let truths:boolean[] = [true,false, false];



/* Classes */
class Car{

}

let car: Car = new Car();


/* Object Literal */
let point:{x:number, y:number} = {
    x:20,
    y:10
}

/* Function 
Function that takes in a number and returns nothing* 

*/

const test:(i:number) => void = (i:number) =>{
    console.log(i);
}


/* When to use Anniotations */
const json = `{"x":10}`;
let test1: {x: number } = JSON.parse(json);
console.log(test1);


/* Declare a variable on one line and initialize it later */


let colors1 = ['green', 'red', 'blue'];

let foundWord:boolean;

for(let i = 0; i < colors1.length; i++){
    colors1[i] === "green" ? foundWord = true: foundWord = false;
}

/* 
When Var Type Cannot be inferred Correctly
*/











