const { Cake } = require("../models/cake")
const {Comment} = require("../models/comment")

module.exports = {
    index: function(req,res){
        Cake.find()
        .then((data) => {
            console.log("all of the cakes!!!")
            res.json({cakes:data});
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success'})
    },

    show: function (req, res){
        Cake.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success', name:req.params.name})
    },

    create: function (req,res){
        let cake = new Cake()
        cake.name= req.body.name
        cake.image= req.body.image
        cake.save()
        .then(newCake => {
            res.json(newCake)
        })
        .catch((err)=>{
            res.json(err);
        });
    },  
    
    createComment: function(req,res){
        let comment = new Comment()
        comment.rating= req.body.rating
        comment.comment= req.body.comment
        comment.save()
        .then(comment => {
            Cake.update({_id: req.params.id},{$push:{comments:comment}})
                .then(data => console.log("createComment success!", data))
                .catch(err=> res.json(err))
        })
        .catch((err)=>{
            res.json(err);
        });
    } 
}