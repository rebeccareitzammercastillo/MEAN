const {Bike} = require("../models/bike")

module.exports = {
    index: function(req,res){
        Bike.find()
            .then((data) =>{
                console.log("All bikes worked Controllers!")
                res.json({bikes:data});
            })
            .catch((err) =>{
                res.json(err);
            });
    },
    create: function (req,res){
        let bike = new Bike()
        bike.title= req.body.title
        bike.description = req.body.description
        bike.price= req.body.price
        bike.location=req.body.location
        bike.image= req.body.image
        bike.save()
        .then(newBike => {
            console.log("Create bike from the controller")
            res.json(newBike)
        })
        .catch((err)=>{
            res.json(err);
        });
    },
}