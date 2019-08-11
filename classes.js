var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    /* Declaring Variables On Class
    color:string;
    constructor(color:string){
        this.color = color;
    };
        Alternative Syntax
    */
    function Vehicle(color) {
        this.color = color;
    }
    ;
    Vehicle.prototype.drive = function () {
        console.log('Driving Bitch');
    };
    ;
    Vehicle.prototype.honk = function () {
        console.log("Honk Honk");
    };
    ;
    Vehicle.prototype.colorOfCar = function () {
        console.log("The Car Color is: " + this.color);
    };
    ;
    return Vehicle;
}());
;
var vehBlue = new Vehicle('Blue');
vehBlue.colorOfCar();
/* Copies All Methods From Parent Class Vehicle, Can Over Write Method if redefined
    - Inheratence
        - if Parent Method Has Construtor and Extends to Child then Child Must provide Argument to Parent**
    - Super
        - If Super is Called In Child Comp. Then It Calls Constructor on Parent. Must Provide Argument to Super For Parent Element
*/
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("Driving");
    };
    Car.prototype.startDriving = function () {
        this.drive();
    };
    return Car;
}(Vehicle));
;
var car = new Car(4, 'Green');
car.drive();
/* Modifiers
Private - Only Called by Other Methods in this Class (helper Function);
Public - Anything Goes Class Defaults to public
Protected - Means Child Classes Can Call Method, but No one Else
*/
