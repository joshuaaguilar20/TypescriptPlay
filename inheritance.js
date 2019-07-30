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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function (test) {
        console.log("this " + test + " is dancing");
    };
    return Person;
}());
var test = new Person('Joshua');
test.dance('Dancing Bro');
var AwesomeJoshua = /** @class */ (function (_super) {
    __extends(AwesomeJoshua, _super);
    function AwesomeJoshua() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomeJoshua.prototype.dance = function () {
        console.log('So Aweomse Joshua Is Dancing');
        _super.prototype.dance.call(this, 'Ebby is Dancing');
    };
    return AwesomeJoshua;
}(Person));
var josh = new AwesomeJoshua('Joshuiwaaa');
josh.dance();
