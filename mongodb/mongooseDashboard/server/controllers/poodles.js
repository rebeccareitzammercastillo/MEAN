const mongoose = require('mongoose')
const{Poodle} = require("../models/poodle")
//if using bcrypt, const/require statement would go here

module.exports = {
    index: function (req, res){
        Poodle.find()
        .then(data => res.render("index", {poodles: data}))
        .catch(err => res.json(err));
    },
    new: function (req,res){
        res.render('newPoodle');
    },
    create: function (req,res){
        const poodle = new Poodle();
        poodle.name = req.body.name;
        poodle.color = req.body.color;
        poodle.age = req.body.age;
        poodle.save()
            .then(newPoodleData => console.log('poodle created:', newPoodleData))
            .catch(err=> console.log(err));
        res.redirect('/')
    },
    show: function (req,res){
        Poodle.findOne({_id:req.params.id})
        .then(data => res.render("onePoodle", {poodles: data}))
        .catch(err => res.json(err));
    },
    edit: function (req,res){
        Poodle.findOne({_id:req.params.id})
        .then(data => res.render("editPoodle", {poodles: data}))
        .catch(err => res.json(err));
    },
    update: function (req,res){
        Poodle.findOne({_id:req.params.id})
        .then(data => {
            poodle = data
            poodle.name = req.body.name
            poodle.color= req.body.color
            poodle.age = req.body.age
            poodle.save()
            .then(()=>{
                res.redirect(`/poodles/${req.params.id}`)
            })
        })
        .catch(err => {
            console.log('err:', err)
            res.redirect(`/poodles/edit/${req.params.id}`)
        })
    },
    delete: function (req,res){
        Poodle.remove({_id:req.params.id,})
        .then(()=>{
            res.redirect('/')
        })
    }

}