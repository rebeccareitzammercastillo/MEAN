const express = require("express");
const app = express();

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

// app.get('/', (request, response) => {
//     response.send("Hello Express");
// });

app.get("/", (req, res) => {
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.get('/users/:id/:name',(req,res) =>{
    res.send('You requested user ' +req.params.id +" "+ req.params.name)
})

app.get('/users',(req,res) =>{
    console.log(req.session)
    context={
        name:req.session.name
    }
    res.render('submissions', context)
})
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.render('submissions', {sub : req.body})
// })
app.post('/', (req, res) => {
    console.log(req.body)
    req.session.name =req.body.name
    res.redirect('/users')
})


app.listen(8000, () => console.log("listening on port 8000"));