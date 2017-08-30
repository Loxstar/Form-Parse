const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');
const app = express();
const todos = [];

app.use(bodyparser.urlencoded({ extended: false }));

app.engine('mustache', mustache());
app.set('views', './templates');
app.set('view engine', 'mustache');

app.get("/", function (req, res) {
    res.render('index', {
        word: todos
    });
});

let num = 0;
app.post("/", function (req, res) {
    num = num + 1
    todos.push({
        stuff: req.body.addStuff,
        done: false,
        things: num
    });
    res.render('index', {
        word: todos
    });

});

app.post('/:things', function (req, res) {
    for (let i = 0; i < todoList.length; i++) {
        if (parseFloat(todos[i].things) === parseFloat(req.params.things)) {
            todos[i].complete = true;
        }
    }
    res.render('index', {
        word: todos
    });
});

app.listen(3000, function () {
    console.log('So much room for activities!');
});