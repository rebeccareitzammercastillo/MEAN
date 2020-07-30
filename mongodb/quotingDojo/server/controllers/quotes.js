const mongoose = require('mongoose')
const{Quote} = require("../models/quote")
//if using bcrypt, const/require statement would go here

module.exports = {
    index: function (req, res){
        errors = req.flash('errors')
        res.render('index');
    },
    pquotes: function (req,res){
        const quote = new Quote();
        quote.name =req.body.name;
        quote.quote=req.body.quote;
        quote.save()
            .then(newQuoteData => {console.log('quote created: ', newQuoteData)
            res.redirect('/quotes')})
            .catch(err => {
                console.log('********************')
                console.log('err:', err.errors.quote)
                if(err.errors.name) {
                    req.flash('errors','Name is required')
                }
                if(err.errors.quote) {
                    req.flash('errors','Quote is required')
                }
                res.redirect('/')
            })
    },
    gquotes: function (req,res){
        Quote.find()
        .sort({createdAt:-1})
        .then(data => {
            console.log('data from .then',data)
            res.render('results', {quotes: data});
        })
        console.log('after .then')
    }
}