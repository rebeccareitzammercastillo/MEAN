const { Boomer } = require("../models/boomer")

module.exports = {
    index: function(req,res){
        Boomer.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success'})
    },

    show: function (req, res){
        Boomer.find({name: req.params.name})
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success', name:req.params.name})
    },

    create: function (req, res){
        let boomer = new Boomer();
        boomer.name= req.params.name;
        boomer.save()
        .then(newBoomer => {
            res.json(newBoomer)
        })
        .catch((err) => {
            res.json(err);
        });
    },

    delete: function (req,res){
        Boomer.remove({name: req.params.name})
        .then(() => {
            res.json(`You have removed ${req.params.name}`);
        })
        .catch((err) => {
            res.json(err);
        });
    }
    
}