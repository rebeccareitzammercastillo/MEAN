const { Business } = require("../models/business")
const {Review} = require("../models/review")

module.exports = {
    index: function(req,res){
        Business.find()
        .then((data) => {
            console.log("all businesses from Controller")
            res.json({businesses:data});
        })
        .catch((err) => {
            res.json(err);
        });
    },
    
    show: function (req, res){
        Business.findOne({_id: req.params.id})
        .then(data => {
            console.log("Show one business from Controller")
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success', name:req.params.name})
    },
    
    create: function (req,res){
        let business = new Business()
        business.name= req.body.name
        business.address= req.body.address
        business.description= req.body.description
        business.save()
        .then(newBusiness => {
            console.log("Create business from Controller")
            res.json(newBusiness);
        })
        .catch((err)=>{
            res.json(err);
        });
    },
    
    edit: function (req,res){
        Business.findOne({_id:req.params.id})
        .then(data => {
            business = data
            business.name = req.body.name
            business.address = req.body.address
            business.description= req.body.description
            business.save()
            .then(()=>{
                res.json(data)
            })
        })
        .catch(err => {
            res.json(err)
        })
        
    },
    
    delete: function (req,res){
        Business.deleteOne({_id: req.params.id})
        .then(() => {
            res.json(`You have deleted from controller`);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    
    createReview: function(req,res){
        console.log("**************************controller")
        let review = new Review()
        review.rating= req.body.rating
        review.review= req.body.review
        review.save()
        .then(review => {
            Business.update({_id: req.params.id},{$push:{reviews:review}})
                .then(data => console.log("createReview success from controller!", data))
                .catch(err=> res.json(err))
        })
        .catch((err)=>{
            res.json(err);
        });
    } 
}