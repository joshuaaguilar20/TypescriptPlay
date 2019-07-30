var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (num) {
            return num * 2;
        };
        ;
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
/// <reference path="timeTwo.ts"
var use = new Utility.useful();
