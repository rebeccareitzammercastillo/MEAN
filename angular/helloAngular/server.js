// const express = require("express"),
//     app = express(),
//     mongoose = require('mongoose'),
//     port = 8000,
//     server = app.listen(port,() => console.log(`Listening on port ${port}`))

// mongoose.connect('mongodb://localhost/helloAngular', {useNewUrlParser: true});

// const session = require('express-session'); //in order to access session
// app.use(express.urlencoded({extended:true})); //in order to access POST data
// app.use(express.static(__dirname + "/static"));

// app.use(session({                           //in order to session. Also must install "npm install express-session"
//     secret: 'keyboardkitten',
//     resave: false,
//     saveUninitialized:true,
//     cookie: {maxAge: 60000}
// }))

// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// require('./server/config/routes')(app)

const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/helloAngular', {useNewUrlParser: true})

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/HelloAngular/dist/HelloAngular"));


require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"));