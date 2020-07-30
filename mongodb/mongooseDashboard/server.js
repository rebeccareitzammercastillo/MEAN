const express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

mongoose.connect('mongodb://localhost/spooDash', {useNewUrlParser: true});

const session = require('express-session'); //in order to access session
app.use(express.urlencoded({extended:true})); //in order to access POST data
app.use(express.static(__dirname + "/static"));

app.use(session({                           //in order to session. Also must install "npm install express-session"
    secret: 'keyboardkitten',
    resave: false,
    saveUninitialized:true,
    cookie: {maxAge: 60000}
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

require('./server/config/routes')(app)