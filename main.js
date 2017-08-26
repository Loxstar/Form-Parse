const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');
const app = express();
const todos = [{
    rad: "Do Karate in the garage",
    cool: "Make bunk beds",
    awesome: "Get Randy Jackson's autograph"
},
{
    rad: "Jump over your mom",
    cool: "Pfft!",
    awesome: "Count to eleventeen"
}];

app.use(bodyparser.urlencoded({ extended: false }));

app.engine('mustache', mustache());
app.set('views', './templates');
app.set('view engine', 'mustache');
app.get("/", function (req, res) {
    res.render('index', { word: todos });
});

app.post("/", function (req, res) {
    // if()  
    
    todos.push({
    rad: req.body.addStuff,
    cool: false,
    awesome: ""});
    res.redirect('/');

});          
    
app.listen(3000, function () {
console.log('So much room for activities!');
});