const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`))

    const session = require('express-session');
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(__dirname + "/static"));
    
    app.use(session({                           
        secret: 'keyboardkitten',
        resave: false,
        saveUninitialized:true,
        cookie: {maxAge: 60000}
    }))
    
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

app.get("/",(req,res) =>{
    console.log(req.session)
    if (req.session.name == null) {
        req.session.name = 1;
    } 
    else {
        req.session.name+=1
    }
    context={name:req.session.name}
    res.render('counter', context)
})

app.post('/two', (req, res) => {
    if (req.session.name){
        req.session.name+=1
    }
    res.redirect('/')
})
app.post('/reset', (req, res) => {
    if (req.session.name){
        req.session.destroy();
    }
    res.redirect('/')
})