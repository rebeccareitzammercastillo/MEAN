const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cars", function (request, response){
    response.render("cars");
})

app.get("/cars", (req, res) => {
    res.render('cars');
})

app.get("/cats", (req, res) => {
    res.render('cats');
})

app.get("/cars/new", (req, res) => {
    res.render('form');
})

app.get("/yingyang", (req, res) => {
    // hard-coded user data
    var details = {
        name: "Ying and Yang",
        image: "FluffyCat1", 
        fave_food: "Tuna, Milk", 
        age: "3 months, 3 months ", 
        fave_toy: "Both love Jingle Bell Mouse"
    };
    res.render('details', {cats: details});
})

app.get("/fluffnormous", (req, res) => {
    // hard-coded user data
    var details = {
        name: "fluffnormous",
        image: "FluffyCat2", 
        fave_food: "Everything and Anything!", 
        age: "2", 
        fave_toy: ["Squishy Ball", " Fluffy Ball"]
    };
    res.render('details', {cats: details});
})

app.get("/snowball", (req, res) => {
    // hard-coded user data
    var details = {
        name: "Snowball",
        image: "FluffyCat3", 
        fave_food: "Snow Cones", 
        age: "6 months", 
        fave_toy: ["Yarn", " Shoe Laces"]
    };
    res.render('details', {cats: details});
})
