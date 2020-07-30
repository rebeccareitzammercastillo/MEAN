const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    note: {type: String, required:true},
}, {timestamps: true})

const Note = new mongoose.model('Note',NoteSchema)

module.exports={
    Note:Note,
    NoteSchema:NoteSchema
}