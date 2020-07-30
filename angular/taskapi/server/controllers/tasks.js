const { Task } = require("../models/task")

module.exports = {
    index: function(req,res){
        Task.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success'})
    },

    show: function (req, res){
        Task.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success', name:req.params.name})
    },

    create: function (req, res){
        let task = new Task()
        task.title= req.body.title
        task.description= req.body.description
        task.completed= req.body.completed
        task.save()
        .then(newTask => {
            res.json(newTask)
        })
        .catch((err) => {
            res.json(err);
        });
    },

    update: function (req, res){
        Task.findOne({_id:req.params.id})
        .then(data => {
            task = data
            task.title = req.body.title
            task.description= req.body.description
            task.save()
            .then(()=>{
                res.json(data)
            })
        })
        .catch(err => {
            res.json(err)
        })
    },

    delete: function (req,res){
        Task.remove({_id: req.params.id})
        .then(() => {
            res.json(`You have removed ${req.params.title}`);
        })
        .catch((err) => {
            res.json(err);
        });
    }
    
}