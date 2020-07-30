// module.exports= function(app){
// mongoose.connect('mongodb://localhost/quotingdojo', {useNewUrlParser: true});

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
// }