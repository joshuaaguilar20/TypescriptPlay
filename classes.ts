class Vehicle {
    /* Declaring Variables On Class 
    color:string;
    constructor(color:string){
        this.color = color;
    };
        Alternative Syntax
    */
    constructor(public color: string){};


    protected drive(): void {
        console.log('Driving Bitch');
    };
     honk(): void {
        console.log(`Honk Honk`);
    };
     colorOfCar(): void {
         console.log(`The Car Color is: ${this.color}`);
     };
};

const vehBlue = new Vehicle('Blue');
    vehBlue.colorOfCar();


/* Copies All Methods From Parent Class Vehicle, Can Over Write Method if redefined 
    - Inheratence 
        - if Parent Method Has Construtor and Extends to Child then Child Must provide Argument to Parent**
    - Super 
        - If Super is Called In Child Comp. Then It Calls Constructor on Parent. Must Provide Argument to Super For Parent Element
*/
class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }
 drive(): void {
     console.log(`Driving`);
    }
startDriving(): void{
    this.drive();
    }
};




const car = new Car(4,'Green');
car.drive();


/* Modifiers 
Private - Only Called by Other Methods in this Class (helper Function);
Public - Anything Goes Class Defaults to public
Protected - Means Child Classes Can Call Method, but No one Else
*/



