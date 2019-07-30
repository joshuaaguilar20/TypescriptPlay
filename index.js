"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var Todo = res.data;
    var id = Todo.id, title = Todo.title, completed = Todo.completed;
    logTodo(id, title, completed);
})["catch"](function (e) { console.log(e); });
var logTodo = function (id, title, completed) {
    console.log("id: " + id + "\nTitle: " + title + " \nCompleated: " + completed);
};
