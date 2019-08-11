var apples = "hello";
var now = new Date();
/*         Indicates Type                indicates Array */
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, false, false];
/* Classes */
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
/* Object Literal */
var point = {
    x: 20,
    y: 10
};
/* Function
Function that takes in a number and returns nothing*

*/
var test = function (i) {
    console.log(i);
};
/* When to use Anniotations */
var json = "{\"x\":10}";
console.log(JSON.parse(json));
