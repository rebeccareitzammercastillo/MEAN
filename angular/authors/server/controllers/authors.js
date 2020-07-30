const { Author } = require("../models/author")
const {Quote} = require("../models/quote")

module.exports = {
    index: function(req,res){
        Author.find()
            .then((data) =>{
                console.log("All authors worked!")
                res.json({authors:data});
            })
            .catch((err) =>{
                res.json(err);
            });
    },
    create: function (req,res){
        let author = new Author()
        author.name= req.body.name
        author.save()
        .then(newAuthor => {
            console.log("this is the controller")
            res.json(newAuthor)
        })
        .catch((err)=>{
            res.json(err);
        });
    },
    edit: function (req, res){
        Author.findOne({_id:req.params.id})
        .then(data => {
            author = data
            author.name = req.body.name
            author.quotes = req.body.quote
            author.save()
            .then(()=>{
                res.json(data)
            })
        })
        .catch(err => {
            res.json(err)
        })
    },
    show: function (req, res){
        Author.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    createQuotes: function(req,res){
        let quote = new Quote()
        console.log("**************controller1**********")
        console.log(req.body.text)
        quote.text= req.body.text
        quote.votes= 0
        quote.save()
        .then(quote => {
            console.log("**************controller2**********")
            Author.update({_id: req.params.id},{$push:{quotes:quote}})
                .then(data => console.log("createQuote success!", data))
                .catch(err=> res.json(err))
        })
        .catch((err)=>{
            res.json(err);
        });
    }, 

    delete: function (req,res){
        Author.deleteOne({_id: req.params.id})
        .then(() => {
            res.json(`You have removed Author`);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    deleteQuotes: function(req,res){
        console.log("***************************controller")
        console.log(req.params.quoteid)
        Author.update({_id: req.params.authorid}, {$pull:{quotes: {_id: req.params.quoteid}}})
        .then((data)=>{
            res.json('You have removed your quote', data);
        })
        .catch((err)=>{
            res.json(err);
        });
    }
}
// Author.update({_id: req.params.id},{$push:{quotes:quote}})
//                 .then(data => console.log("createQuote success!", data))
//                 .catch(err=> res.json(err))
//         })

