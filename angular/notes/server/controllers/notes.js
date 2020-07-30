const { Note } = require("../models/note")

module.exports = {
    index: function(req,res){
        Note.find()
        .sort({createdAt:-1})
        .then((data) => {
            console.log("All of the notes")
            res.json({notes:data});
        })
        .catch((err) => {
            res.json(err);
        });
    },

    create: function (req,res){
        let note = new Note()
        note.note= req.body.note
        note.save()
        .then(newNote => {
            res.json(newNote)
        })
        .catch((err)=>{
            res.json(err);
        });
    },
} 
