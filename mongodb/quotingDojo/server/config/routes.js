const Quotes = require('../controllers/quotes')

module.exports= function(app){

app.get("/", (req, res) => {
    Quotes.index(req, res)
});

app.post('/quotes', (req, res) => {
    Quotes.pquotes(req,res)
});

app.get('/quotes',(req,res) =>{
    Quotes.gquotes(req,res)
});

}