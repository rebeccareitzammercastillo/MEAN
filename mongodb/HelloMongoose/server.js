const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hellomongoose', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
    // create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

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

app.get('/', (req, res) => {  
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});

app.post('/users', (req, res) => {
    // console.log(req.body)
    const user = new User();
    user.name =req.body.name;
    user.age=req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
    res.redirect('/')
})


app.listen(8000, () => console.log("listening on port 8000"));