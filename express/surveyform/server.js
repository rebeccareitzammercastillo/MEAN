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

    app.get("/", (req, res) => {
        res.render('index');
    })
    app.post('/result', (req, res) => {
        console.log(req.body)
        req.session.name =req.body.name
        req.session.location=req.body.location
        req.session.lang=req.body.lang
        req.session.comment=req.body.comment
        res.redirect('/results')
    })
    app.get('/results',(req,res) =>{
        console.log(req.session)
        context={
            name:req.session.name,
            location: req.session.location,
            lang: req.session.lang,
            comment: req.session.comment
        }
        res.render('results', context)
    })