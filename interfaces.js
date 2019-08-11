;
var oldCivic = {
    name: "civic",
    year: new Date,
    broken: false,
    summery: function () {
        return "Name: " + this.name;
    }
};
var test = function (obj) {
    return console.log(obj.summery());
};
test(oldCivic);
